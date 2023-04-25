import { EventBridgeEvent } from 'aws-lambda';
import { EventInterface } from 'catalog/event';
type Handler<Event extends EventInterface> = (event: EventBridgeEvent<Event['name'], Event['payload']>) => Promise<void>;
export declare const eventHandler: <Event_1 extends EventInterface>(handler: Handler<Event_1>) => Handler<Event_1>;
export {};
