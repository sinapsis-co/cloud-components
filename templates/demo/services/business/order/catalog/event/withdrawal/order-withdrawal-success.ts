import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Order } from 'services/business/order/entities';

export type Event = {
  name: 'app.order:withdrawal.success';
  payload: Order;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:withdrawal.success',
};
