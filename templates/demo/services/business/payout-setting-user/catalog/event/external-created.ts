import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { PayoutUser } from '../../entities';

export type Event = {
  name: 'app.payout.created.external';
  payload: Omit<PayoutUser, 'updatedAt' | 'createdAt'>;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.payout.created.external',
};
