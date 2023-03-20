import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { TransactionCreate } from '../../entities';

export type Event = {
  name: 'app.transaction:create';
  payload: TransactionCreate;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.transaction:create',
};
