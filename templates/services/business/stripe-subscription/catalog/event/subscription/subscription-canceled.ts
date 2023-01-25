import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Subscription } from '../../../entities/subscription';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:canceled';
  payload: {
    customerId: string;
    subscription: Subscription;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:canceled',
  source: 'app',
};
