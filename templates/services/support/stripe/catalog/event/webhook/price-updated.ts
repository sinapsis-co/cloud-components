import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'price.updated'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:price.updated',
  source: 'app',
};