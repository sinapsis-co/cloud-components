import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'payout.paid'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:payout.paid',
  source: 'app',
};
