import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { UserModel } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.member.signup';
  payload: {
    userInput: UserModel['Body'] & UserModel['Key'];
    orgId: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.member.signup',
  source: 'app',
};
