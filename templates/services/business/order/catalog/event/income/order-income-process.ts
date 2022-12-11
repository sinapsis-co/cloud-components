import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/order';

export type Event = {
  name: 'app.order:income.process';
  payload: Order;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:income.process',
};
