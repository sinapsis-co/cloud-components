import { TimestreamWriteClient, WriteRecordsCommand, WriteRecordsCommandInput } from '@aws-sdk/client-timestream-write';
import { chunkArray } from '../../util/chunk-array';

import { PlatformFault } from '../../error';
import { Tracing } from '../../tracing';

const timestream: TimestreamWriteClient = Tracing.captureIntegration(new TimestreamWriteClient({}) as any);

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
    throw new PlatformFault({
      code: 'FAULT_TS_WRITE',
      detail: err.code === 'RejectedRecordsException' ? request.response.httpResponse.body.toString() : err.message,
    });
  });
};
