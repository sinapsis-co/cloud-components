import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Payment } from '../../entities';

export type Event = EventInterface<{
  name: 'app.payment:success';
  payload: Payment;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.payment:success',
  source: 'app',
};
