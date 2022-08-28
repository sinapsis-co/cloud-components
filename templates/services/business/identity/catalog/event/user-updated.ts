import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { UserProfile } from 'services/business/identity/entities/user-profile';

export type Event = EventInterface<{
  name: 'app.user.updated';
  payload: UserProfile;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.user.updated',
  source: 'app',
};
