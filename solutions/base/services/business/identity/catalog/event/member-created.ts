import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { User } from '../../entities/user';

export type Event = EventInterface<{
  name: 'app.member.created';
  payload: User;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.member.created',
  source: 'app',
};
