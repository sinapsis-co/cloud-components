import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { User } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.member.disabled';
  payload: User;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.member.disabled',
  source: 'app',
};
