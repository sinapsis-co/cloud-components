import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'stripe-subscription:subscription.invoice-paid';
  payload: {
    userId: string;
    tenantId: string;
    orderId: string;
    subscriptionId: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-subscription:subscription.invoice-paid',
  source: 'cc',
};
