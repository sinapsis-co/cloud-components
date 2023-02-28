import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Payout } from '../../../entities';

export type Event = {
  name: 'app.payout.failed';
  payload: Payout;
};

export const eventConfig: EventConfig<Event> = {
  source: 'app',
  name: 'app.payout.failed',
};