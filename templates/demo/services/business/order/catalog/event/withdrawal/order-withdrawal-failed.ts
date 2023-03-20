import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Order } from '../../../entities';

export type Event = {
  name: 'app.order:withdrawal.failed';
  payload: Order;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:withdrawal.failed',
};
