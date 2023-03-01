import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Subscription } from '../../entities';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:updated';
  payload: {
    customerId: string;
    subscription: Subscription;
    paymentMethodId?: string;
    coupon?: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:updated',
  source: 'app',
};
