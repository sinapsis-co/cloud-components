import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'stripe-subscription:subscription.payment-failed';
  payload: {
    subscriptionId?: string;
    orderId?: string;
    tenantId: string;
    userId: string;
    reason?: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-subscription:subscription.payment-failed',
  source: 'cc',
};
