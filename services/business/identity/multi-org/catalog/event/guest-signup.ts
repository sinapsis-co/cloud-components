import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { UserModel } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.guest.signup';
  payload: {
    userInput: UserModel['Body'] & UserModel['Key'];
    orgId: string;
    workspaceId: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.guest.signup',
  source: 'app',
};
