import { EventBridgeEvent } from 'aws-lambda';
import { EventInterface } from '../../catalog/event';
import { generateTracing } from '../../tracing';

type Handler<Event extends EventInterface> = (
  event: EventBridgeEvent<Event['name'], Event['payload']>
) => Promise<void>;

export const eventHandler = <Event extends EventInterface>(handler: Handler<Event>): Handler<Event> => {
  return async (event: EventBridgeEvent<Event['name'], Event['payload']>): Promise<void> => {
    const tracing = generateTracing();
    try {
      await handler(event);
      tracing.close();
    } catch (error: any) {
      tracing.close(error);
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(event));
      throw error;
    }
  };
};
