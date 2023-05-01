import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { User } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.tenant.created';
  payload: User;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.tenant.created',
  source: 'app',
};
