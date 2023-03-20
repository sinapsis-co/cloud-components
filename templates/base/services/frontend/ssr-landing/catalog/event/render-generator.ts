import { EmptyObject } from '@sinapsis-co/cc-platform/catalog/api';
import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';

export type Event = EventInterface<{
  name: 'app.ssr-landing.deploy-triggered';
  payload: EmptyObject;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.ssr-landing.deploy-triggered',
  source: 'app',
};
