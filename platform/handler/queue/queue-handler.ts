import { SQSEvent } from 'aws-lambda';

type Handler<Payload> = (event: SQSEvent, records: Payload[]) => Promise<void>;

export const queueHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const records: Payload[] = event.Records.map((e) => JSON.parse(e.body));
    return handler(event, records);
  };
};
