import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'invoice.paid'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:invoice.paid',
  source: 'app',
};
