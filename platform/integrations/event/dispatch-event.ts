/* eslint-disable @typescript-eslint/no-non-null-assertion */
import EventBridge from 'aws-sdk/clients/eventbridge';
import { EventConfig, EventInterface } from '../../catalog/event/event-interface';

const eventBridge = new EventBridge();

export const dispatchEvent = async <Event extends EventInterface = EventInterface>(
  eventConfig: EventConfig<Event>,
  payload: Event['payload'],
  eventBusName: string = process.env.EVENT_BUS!
): Promise<void> => {
  const event: EventBridge.PutEventsRequestEntry = {
    EventBusName: eventBusName,
    DetailType: eventConfig.name,
    Source: eventConfig.source,
    Detail: JSON.stringify(payload),
    Resources: [],
  };

  await eventBridge.putEvents({ Entries: [event] }).promise();
};
