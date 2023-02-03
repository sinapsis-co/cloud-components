import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/business/order/entities';

export type Event = EventInterface<{
  name: 'stripe-subscription:subscription.fist-subscription-failed';
  payload: {
    tenantId: string;
    userId: string;
    payload: any;
    order: Order;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-subscription:subscription.fist-subscription-failed',
  source: 'cc',
};
