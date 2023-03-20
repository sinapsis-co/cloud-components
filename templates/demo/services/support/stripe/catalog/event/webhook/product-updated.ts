import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'product.updated'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:product.updated',
  source: 'app',
};
