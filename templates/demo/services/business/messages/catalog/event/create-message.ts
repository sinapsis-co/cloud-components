import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';

export type Event = EventInterface<{
  name: 'message.create';
  payload: {
    users: string[];
    name: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'message.create',
  source: 'app',
};
