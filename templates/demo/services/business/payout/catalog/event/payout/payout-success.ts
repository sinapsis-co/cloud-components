import { EventConfig } from '@sinapsis-co/cc-platform/catalog/event';
import { Payout } from '../../../entities';

export type Event = {
  name: 'app.payout.success';
  payload: Payout;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.payout.success',
};
