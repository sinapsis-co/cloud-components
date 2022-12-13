import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/business/order';
import { OrderIncome } from 'services/business/order/entities';


export type Event = {
  name: 'app.order:income.paid';
  payload: Order & OrderIncome;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:income.paid',
};
