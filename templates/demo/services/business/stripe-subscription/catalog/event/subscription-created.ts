import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { Order } from 'services/business/order/entities';
import { Subscription } from '../../entities';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:created';
  payload: {
    tenantId: string;
    userId: string;
    subscription: Subscription;
    order: Order;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:created',
  source: 'app',
};
