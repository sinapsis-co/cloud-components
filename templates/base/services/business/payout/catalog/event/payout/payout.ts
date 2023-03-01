import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Payout } from '../../../entities';

export type Event<K extends string = string> = {
  name: `app.payout.${K}.request`;
  payload: Payout;
};

export const eventConfig = (provide: string): EventConfig<Event> => ({
  source: 'app',
  name: `app.payout.${provide}.request`,
});
