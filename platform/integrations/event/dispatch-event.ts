/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EventBridgeClient, PutEventsCommand, PutEventsRequestEntry } from '@aws-sdk/client-eventbridge';
import AwsXRay from 'aws-xray-sdk-core';
import { EventConfig, EventInterface } from '../../catalog/event';

// const singleton = new EventBridge();
const eventBridge = AwsXRay.captureAWSv3Client(new EventBridgeClient({}));

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

  await AwsXRay.captureAsyncFunc(`Dispatch: ${eventConfig.name}`, async (innerSubsegment) => {
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    await eventBridge.send(new PutEventsCommand({ Entries: [event] }));
    innerSubsegment?.close();
  });
};
