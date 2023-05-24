import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';

export type Event = EventInterface<{
  name: 'app.tenant.created';
  payload: {
    tenantId: string;
    companyName: string;
    ownerEmail: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'app.tenant.created',
  source: 'app',
};
