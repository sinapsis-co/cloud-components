import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

export type Event = EventInterface<{
  name: 'app.tenant.deleted';
  payload: {
    tenantId: string;
    deleteReason?: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.tenant.deleted',
  source: 'app',
};
