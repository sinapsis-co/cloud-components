import { EventInterface, EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'Object Created';
  payload: {
    bucket: { name: string };
    object: { key: string };
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'Object Created',
  source: 'aws.s3',
};
