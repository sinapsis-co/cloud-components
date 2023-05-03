import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { UserModel } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.tenant.created';
  payload: UserModel['Entity'];
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.tenant.created',
  source: 'app',
};
