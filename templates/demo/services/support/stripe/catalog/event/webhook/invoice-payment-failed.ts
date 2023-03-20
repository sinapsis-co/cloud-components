import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'invoice.payment_failed'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:invoice.payment_failed',
  source: 'app',
};
