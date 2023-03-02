import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Subscription } from '../../entities';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:canceled';
  payload: {
    userId: string;
    tenantId: string;
    subscription: Subscription;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:canceled',
  source: 'app',
};
