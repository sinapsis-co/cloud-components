import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Order } from 'services/business/order';
import { OrderWithdrawal } from 'services/business/order/entities';

export type Event = {
  name: 'app.order:withdrawal.pending';
  payload: Order & OrderWithdrawal;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.order:withdrawal.pending',
};
