import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order, OrderWithdrawal } from 'services/order/entities';
export type Event = {
  name: 'app.order:withdrawal.pending';
  payload: Order & OrderWithdrawal;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:withdrawal.pending',
};
