import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:trial-will-finish';
  payload: {
    customerId: string;
    leftDays: number;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:trial-will-finish',
  source: 'app',
};
