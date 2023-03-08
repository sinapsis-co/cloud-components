import { SQSEvent } from 'aws-lambda';
import { generateTracing } from '../../tracing';

type Handler<Payload> = (event: SQSEvent, records: Payload[]) => Promise<void>;

export const queueHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const tracing = generateTracing();
    try {
      const records: Payload[] = event.Records.map((e) => JSON.parse(e.body));
      const result = handler(event, records);
      tracing.close();
      return result;
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.log(error);
      tracing.close(error);
      throw error;
    }
  };
};
