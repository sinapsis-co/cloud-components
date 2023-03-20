import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';

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
