/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-types */
import {
  FirehoseTransformationEvent,
  FirehoseTransformationEventRecord,
  FirehoseTransformationHandler,
  FirehoseTransformationResult,
  FirehoseTransformationResultRecord,
} from 'aws-lambda';

const createDroppedRecord = (recordId: string): FirehoseTransformationResultRecord => {
  return { recordId, result: 'Dropped', data: Buffer.from('').toString('base64') };
};

const processData = (payloadStr: string): Object => {
  return JSON.parse(payloadStr);
};

const transformRecord = (record: FirehoseTransformationEventRecord): FirehoseTransformationResultRecord => {
  try {
    const payloadStr = Buffer.from(record.data, 'base64').toString();
    const jsonRecord = processData(payloadStr);
    if (!jsonRecord) {
      console.error('Error creating json record');
      return createDroppedRecord(record.recordId);
    }
    return {
      recordId: record.recordId,
      result: 'Ok',
      data: Buffer.from(JSON.stringify(jsonRecord) + '\n').toString('base64'),
    };
  } catch (error) {
    console.error('Error processing record ${record.recordId}: ', error);
    return createDroppedRecord(record.recordId);
  }
};

export const handler: FirehoseTransformationHandler = async (
  event: FirehoseTransformationEvent
): Promise<FirehoseTransformationResult> => {
  const records: FirehoseTransformationResultRecord[] = event.records.map((r) => transformRecord(r));
  return { records };
};
