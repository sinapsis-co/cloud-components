import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { Subscription } from '../../../entities/subscription';

export type Event = EventInterface<{
  name: 'stripe-connector:subscription:seat:added';
  payload: {
    customerId: string;
    subscription: Subscription;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'stripe-connector:subscription:seat:added',
  source: 'app',
};
