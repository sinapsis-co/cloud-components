import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/order/entities';

export type Event = {
  name: 'app.order-proposal:income.created';
  payload: Order;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order-proposal:income.created',
};
