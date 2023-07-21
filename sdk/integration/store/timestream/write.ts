import { TimestreamWriteClient, WriteRecordsCommand, WriteRecordsCommandInput } from '@aws-sdk/client-timestream-write';

import { PlatformFault } from 'error';
import { Tracing, traceableFunction } from 'tracing';
import { chunkArray } from 'util/chunk-array';

const timestream: TimestreamWriteClient = Tracing.captureIntegration(new TimestreamWriteClient({}) as any);

const MAX_MESSAGE_PER_BATCH = 100;

export const timestreamWrite = async (
  records: WriteRecordsCommandInput['Records'],
  DatabaseName: string,
  TableName: string
): Promise<any[]> => {
  const cmd = async () => {
    const chunk = chunkArray(records!, MAX_MESSAGE_PER_BATCH);
    return Promise.all(chunk.map((c) => timestreamWriteBatch(c, DatabaseName, TableName)));
  };
  return traceableFunction('Write', 'FAULT_TS_WRITE', TableName, cmd);
};

// Private Method
const timestreamWriteBatch = async (
  Records: WriteRecordsCommandInput['Records'],
  DatabaseName: string,
  TableName: string
): Promise<void> => {
  const request: any = await timestream
    .send(new WriteRecordsCommand({ DatabaseName, TableName, Records }))
    .catch((err) => {
      throw new PlatformFault({
        code: 'FAULT_TS_WRITE',
        detail: err.code === 'RejectedRecordsException' ? request.response.httpResponse.body.toString() : err.message,
      });
    });
};
