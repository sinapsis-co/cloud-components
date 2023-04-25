import { EventBridgeClient } from '@aws-sdk/client-eventbridge';
import { EventConfig, EventInterface } from 'catalog/event';
export declare const eventBridge: EventBridgeClient;
export type TracingMeta = Record<string, string>;
export declare const dispatchEvent: <Event_1 extends EventInterface = EventInterface, TracingMeta_1 extends Record<string, string> = Record<string, string>>(eventConfig: EventConfig<Event_1>, payload: Event_1["payload"], tracingMeta?: TracingMeta_1 | undefined, eventBusName?: string) => Promise<void>;
