import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'invoice.payment_action_required'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:invoice.payment_action_required',
  source: 'app',
};
