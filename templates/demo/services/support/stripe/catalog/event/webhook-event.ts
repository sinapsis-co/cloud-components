import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import StripeClient from 'stripe';

export type Event<T extends string> = EventInterface<{
  name: `stripe-connector:hook:${T}`;
  payload: StripeClient.Event;
}>;

export const eventConfig = <T extends string>(name: T): EventConfig<Event<T>> => ({
  name: `stripe-connector:hook:${name}`,
  source: 'app',
});
