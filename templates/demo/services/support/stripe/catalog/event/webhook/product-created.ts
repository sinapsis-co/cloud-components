import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'product.created'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:product.created',
  source: 'app',
};
