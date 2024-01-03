/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { EventBridgeClient, PutEventsCommand, PutEventsRequestEntry } from '@aws-sdk/client-eventbridge';
import { EventConfig, EventInterface } from 'catalog/event';
import { Tracing, traceableFunction } from 'tracing';

export const eventBridge = Tracing.captureIntegration(new EventBridgeClient({}));

const EVENT_MAX_SIZE = 262144 * 0.8; // 256 KB * 0.8 (For safety)

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
  };
  const cmd = () => eventBridge.send(new PutEventsCommand({ Entries: [event] }));
  await traceableFunction('Dispatch', 'FAULT_EVENT_DISPATCH', eventConfig.name, cmd, { ...tracingMeta, ...event });
};

export const dispatchEventBatch = async <
  Events extends EventInterface = EventInterface,
  TracingMeta extends Record<string, string> = Record<string, string>
>(
  eventConfig: EventConfig<Events>,
  events: Events['payload'][],
  tracingMeta?: TracingMeta,
  eventBusName: string = process.env.EVENT_BUS!
): Promise<void> => {
  const entries: PutEventsRequestEntry[] = events.map((e) => {
    const event: PutEventsRequestEntry = {
      EventBusName: eventBusName,
      DetailType: eventConfig.name,
      Source: eventConfig.source,
      Detail: JSON.stringify(e),
    };
    return event;
  });
  const chunks: PutEventsRequestEntry[][] = splitArrayBySize(entries);

  const cmd = async () => {
    await Promise.all(chunks.map((chunk) => eventBridge.send(new PutEventsCommand({ Entries: chunk }))));
  };
  await traceableFunction('Dispatch', 'FAULT_EVENT_BATCH_DISPATCH', eventConfig.name, cmd, tracingMeta);
};

function getSize(entry: PutEventsRequestEntry): number {
  let size = 0;
  size += new TextEncoder().encode(entry.EventBusName).length;
  size += new TextEncoder().encode(entry.DetailType).length;
  size += new TextEncoder().encode(entry.Source).length;
  size += new TextEncoder().encode(entry.Detail).length;
  return size;
}

function splitArrayBySize(entries: PutEventsRequestEntry[]): PutEventsRequestEntry[][] {
  const result: PutEventsRequestEntry[][] = [];
  let currentSize = 0;
  let currentChunk: PutEventsRequestEntry[] = [];

  for (const entry of entries) {
    const entrySize = getSize(entry);
    if (currentSize + entrySize > EVENT_MAX_SIZE) {
      result.push(currentChunk);
      currentChunk = [entry];
      currentSize = entrySize;
    } else {
      currentChunk.push(entry);
      currentSize += entrySize;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}
