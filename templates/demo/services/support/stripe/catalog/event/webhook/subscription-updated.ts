import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'customer.subscription.updated'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:customer.subscription.updated',
  source: 'app',
};
