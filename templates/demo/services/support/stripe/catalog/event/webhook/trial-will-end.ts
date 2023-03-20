import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Event as WebhookEvent } from '../webhook-event';

export type Event = WebhookEvent<'customer.subscription.trial_will_end'>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:hook:customer.subscription.trial_will_end',
  source: 'app',
};
