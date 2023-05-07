import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { Invite } from '../../model/invite';

export type Event = EventInterface<{
  name: 'app.invite.deleted';
  payload: Invite;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.invite.deleted',
  source: 'app',
};
