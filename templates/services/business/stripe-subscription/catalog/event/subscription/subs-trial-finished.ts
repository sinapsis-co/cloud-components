import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:trial-finished';
  payload: {
    customerId: string;
    subscriptionId: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:trial-finished',
  source: 'app',
};
