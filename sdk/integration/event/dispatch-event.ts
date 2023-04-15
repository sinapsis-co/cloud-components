/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EventBridgeClient, PutEventsCommand, PutEventsRequestEntry } from '@aws-sdk/client-eventbridge';
import { EventConfig, EventInterface } from '../../catalog/event';
import { Tracing } from '../../tracing';

export const eventBridge = Tracing.captureIntegration(new EventBridgeClient({}));

export type TracingMeta = Record<string, string>;

export const dispatchEvent = async <
  Event extends EventInterface = EventInterface,
  TracingMeta extends Record<string, string> = Record<string, string>
>(
  eventConfig: EventConfig<Event>,
  payload: Event['payload'],
  tracingMeta?: TracingMeta,
  eventBusName: string = process.env.EVENT_BUS!
): Promise<void> => {
  const event: PutEventsRequestEntry = {
    EventBusName: eventBusName,
    DetailType: eventConfig.name,
    Source: eventConfig.source,
    Detail: JSON.stringify(payload),
    Resources: [],
  };
  const cmd = () => eventBridge.send(new PutEventsCommand({ Entries: [event] }));
  await Tracing.capture('Dispatch', 'FAULT_EVENT_DISPATCH', eventConfig.name, cmd, tracingMeta);
};
