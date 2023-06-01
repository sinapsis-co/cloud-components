import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

export type Event = EventInterface<{
  name: 'app.workspace.created';
  payload: { workspaceId: string; orgId: string };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.workspace.created',
  source: 'app',
};
