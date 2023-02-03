import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Subscription } from '../../entities';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:status-updated';
  payload: {
    userId: string;
    tenantId: string;
    subscription: Pick<Subscription, 'status' | 'currentPeriodEnd'>;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:status-updated',
  source: 'app',
};
