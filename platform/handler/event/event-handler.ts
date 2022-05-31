import { EventBridgeEvent } from 'aws-lambda';
import { EventInterface } from '../../catalog/event/event-interface';

type Handler<Event extends EventInterface> = (
  event: EventBridgeEvent<Event['name'], Event['payload']>
) => Promise<void>;

export const eventHandler = <Event extends EventInterface>(handler: Handler<Event>): Handler<Event> => {
  return async (event: EventBridgeEvent<Event['name'], Event['payload']>): Promise<void> => {
    try {
      await handler(event);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(event));
      throw error;
    }
  };
};
