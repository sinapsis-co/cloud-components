import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import {
  Event as WebhookEvent,
  eventConfig as eventConfigHook,
} from '../../../../../support/stripe/catalog/event/webhook-event';

export type Event = WebhookEvent<'account.external_account.updated'>;

export const eventConfig: EventConfig<Event> = eventConfigHook('account.external_account.updated');
