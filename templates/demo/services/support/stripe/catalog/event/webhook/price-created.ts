import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'price.created'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:price.created',
  source: 'app',
};
