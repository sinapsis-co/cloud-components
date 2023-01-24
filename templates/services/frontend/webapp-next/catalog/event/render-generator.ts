import { EmptyObject } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'app.ssr-landing.deploy-triggered';
  payload: EmptyObject;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.ssr-landing.deploy-triggered',
  source: 'app',
};
