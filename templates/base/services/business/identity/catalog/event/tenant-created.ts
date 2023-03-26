import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { User } from '../../entities/user';

export type Event = EventInterface<{
  name: 'app.tenant.created';
  payload: User;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.tenant.created',
  source: 'app',
};
