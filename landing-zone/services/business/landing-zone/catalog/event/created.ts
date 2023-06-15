import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { LandingModel } from '../../model/landing';

export type Event = EventInterface<{
  name: 'event.landing.created';
  payload: {
    landing: LandingModel['Entity'];
    credentials: { accessKeyId: string; secretAccessKey: string };
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'event.landing.created',
  source: 'app',
};
