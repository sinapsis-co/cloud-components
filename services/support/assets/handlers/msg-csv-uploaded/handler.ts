import { queueBatchHandler } from '@sinapsis-co/cc-sdk/handler/queue/queue-batch-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { sendMessages } from '@sinapsis-co/cc-sdk/integration/queue';
import { S3 } from 'aws-sdk';
import { error, log } from 'console';
import * as csv from 'fast-csv';
import { Transform } from 'stream';
import { assetEvent, assetMessage } from '../../catalog';

const s3 = new S3({ apiVersion: 'latest' });
const chunkSize = 4000;

export const handler = queueBatchHandler<assetMessage.csvUploaded.Message>(async (event, record, payload) => {
  const params: S3.GetObjectRequest = {
    Bucket: process.env.PRIVATE_BUCKET!,
    Key: payload.key,
  };

  let fileSize: number | undefined = 0;
  let metadata: Record<string, any> | undefined;

  await s3
    .headObject(params)
    .promise()
    .then((result) => {
      fileSize = result.ContentLength;
      metadata = result.Metadata;
    });

  const startByte = payload.s3FileParser ? payload.s3FileParser.results.startByte : 0;
  let headers = payload.s3FileParser ? payload.s3FileParser.results.headers : [];
  let endByte = payload.s3FileParser ? startByte + chunkSize : chunkSize;

  if (endByte > fileSize) endByte = fileSize;

  const finalIteration = isFinalIteration(startByte, fileSize, chunkSize);
  const range = `bytes=${startByte}-${endByte}`;
  const stream = s3.getObject({ ...params, Range: range }).createReadStream();
  const csvContent: Record<string, any>[] = [];

  await new Promise(function (resolve, reject) {
    let lastNewline = 0;
    stream
      .pipe(
        new Transform({
          transform(chunk: Buffer, _, cb) {
            if (finalIteration) {
              cb(null, chunk);
            } else {
              lastNewline = chunk.lastIndexOf('\n', payload.s3FileParser ? chunkSize - 500 : -1);
              cb(null, chunk.subarray(0, lastNewline));
            }
          },
        })
      )
      .pipe(
        csv.parse({
          headers: payload.s3FileParser
            ? [...payload.s3FileParser.results.headers]
            : (rawHeaders) => rawHeaders.map((h) => h!.toLowerCase()),
        })
      )
      .on('headers', (h) => (payload.s3FileParser ? (headers = payload.s3FileParser.results.headers) : (headers = h)))
      .on('data', (data: Record<string, any>) => {
        csvContent.push(Object.keys(metadata || {}).length ? format(metadata!, data) : data);
      })
      .on('error', (err) => {
        error(err);
        reject(err);
      })
      .on('end', (rows: number) => {
        log(`Parsed ${rows} rows`);
        payload.s3FileParser = {
          results: {
            startByte: startByte + lastNewline + 1,
            finished: finalIteration,
            headers: headers,
          },
        };
        resolve(event);
      });
  });

  await Promise.all(
    csvContent.map((cc) => {
      return dispatchEvent<assetEvent.csvProcessed.Event<string>>(
        assetEvent.csvProcessed.eventConfig(payload.entity),
        cc
      );
    })
  );

  if (!finalIteration) {
    await sendMessages<assetMessage.csvUploaded.Message>(
      [
        {
          entity: payload.entity,
          key: payload.key,
          s3FileParser: payload.s3FileParser,
        },
      ],
      {
        queueUrl: process.env.ORIGIN_QUEUE,
      }
    );
  }
  return;
});

const isFinalIteration = (nextStartByte: number, fileSize: number, chunkSize: number) => {
  if (nextStartByte + chunkSize >= fileSize) return true;
  return false;
};

const format = (metadata: Record<string, string>, content: Record<string, any>) => {
  let finalContent: Record<string, any> = {};
  Object.keys(metadata).forEach((md) => {
    finalContent = {
      ...finalContent,
      [metadata[md]]: content[md],
    };
  });
  return finalContent;
};
