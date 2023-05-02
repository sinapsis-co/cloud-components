import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { UserModel } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.member.created';
  payload: UserModel['Entity'];
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.member.created',
  source: 'app',
};
