import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { UserModel } from '../../model/user';

export type Event = EventInterface<{
  name: 'app.org.signup';
  payload: {
    userInput: UserModel['Body'] & UserModel['Key'];
    orgName: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.org.signup',
  source: 'app',
};
