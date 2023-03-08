import { TimestreamWrite } from 'aws-sdk';
import AwsXRay from 'aws-xray-sdk-core';
import { chunkArray } from '../../util/array/chunk-array';

import { HandledError } from '../../util/handled-error';

const timestream = AwsXRay.captureAWSClient(new TimestreamWrite());

const MAX_MESSAGE_PER_BATCH = 100;

export const timestreamWrite = async (
  records: TimestreamWrite.Records,
  DatabaseName: string,
  TableName: string
): Promise<void> => {
  const chunk = chunkArray(records, MAX_MESSAGE_PER_BATCH);

  await Promise.all(chunk.map((c) => timestreamWriteBatch(c, DatabaseName, TableName)));
};

const timestreamWriteBatch = async (
  Records: TimestreamWrite.Records,
  DatabaseName: string,
  TableName: string
): Promise<void> => {
  const request: any = timestream.writeRecords({
    DatabaseName,
    TableName,
    Records,
  });

  await request.promise().catch((err) => {
    const error = new HandledError('TimestreamWriteError', err.message);
    if (err.code === 'RejectedRecordsException') {
      error.raw = request.response.httpResponse.body.toString();
    }
    throw error;
  });
};
