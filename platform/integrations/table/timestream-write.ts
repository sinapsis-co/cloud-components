import { TimestreamWriteClient, WriteRecordsCommand, WriteRecordsCommandInput } from '@aws-sdk/client-timestream-write';
import AwsXRay from 'aws-xray-sdk-core';
import { chunkArray } from '../../util/chunk-array';

import { HandledFault } from '../../util/handled-exception';

const timestream: TimestreamWriteClient = AwsXRay.captureAWSv3Client(new TimestreamWriteClient({}) as any);

const MAX_MESSAGE_PER_BATCH = 100;

export const timestreamWrite = async (
  records: WriteRecordsCommandInput['Records'],
  DatabaseName: string,
  TableName: string
): Promise<void> => {
  const chunk = chunkArray(records!, MAX_MESSAGE_PER_BATCH);
  await Promise.all(chunk.map((c) => timestreamWriteBatch(c, DatabaseName, TableName)));
};

const timestreamWriteBatch = async (
  Records: WriteRecordsCommandInput['Records'],
  DatabaseName: string,
  TableName: string
): Promise<void> => {
  const request: any = timestream.send(new WriteRecordsCommand({ DatabaseName, TableName, Records })).catch((err) => {
    throw new HandledFault({
      code: 'FAULT_TS_WRITE',
      detail: err.code === 'RejectedRecordsException' ? request.response.httpResponse.body.toString() : err.message,
    });
  });
};
