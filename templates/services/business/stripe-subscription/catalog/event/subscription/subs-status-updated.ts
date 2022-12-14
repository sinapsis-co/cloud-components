import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Subscription } from '../../../entities/subscription';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:status-updated';
  payload: {
    customerId: string;
    subscription: Pick<Subscription, 'status' | 'currentPeriodEnd'>;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:status-updated',
  source: 'app',
};
