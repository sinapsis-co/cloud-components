import { EventBridgeEvent } from 'aws-lambda';
import { EventInterface } from '../../catalog/event';
import { PlatformError, PlatformFault } from '../../error';
import { timeoutController } from '../../error/timeout';
import { HandledException } from '../../error/types';
import { Tracing } from '../../tracing';

type Handler<Event extends EventInterface> = (
  event: EventBridgeEvent<Event['name'], Event['payload']>
) => Promise<void>;

export const eventHandler = <Event extends EventInterface>(handler: Handler<Event>): Handler<Event> => {
  return async (event: EventBridgeEvent<Event['name'], Event['payload']>): Promise<void> => {
    const tracing = new Tracing();
    try {
      await timeoutController(handler(event));
      tracing.close();
    } catch (error: any) {
      const handledException: HandledException =
        error instanceof PlatformError || error instanceof PlatformFault
          ? error
          : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
      handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.id });
      tracing.failureClose(handledException);
      return handledException.throwException();
    }
  };
};
