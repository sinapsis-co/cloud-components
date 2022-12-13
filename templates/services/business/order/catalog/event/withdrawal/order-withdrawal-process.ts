import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/business/order';

export type Event = {
  name: 'app.order:withdrawal.process';
  payload: Order;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:withdrawal.process',
};
