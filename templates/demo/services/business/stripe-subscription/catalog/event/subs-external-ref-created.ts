import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { ExternalRef } from 'services/support/stripe/entities';
import { Subscription } from '../../entities';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:external-ref-created';
  payload: {
    customerId: string;
    subscription: Pick<Subscription, 'currentPeriodEnd'>;
    externalRef: ExternalRef;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:external-ref-created',
  source: 'app',
};
