import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'cc:order:order.expired';
  payload: {
    orderId: string;
    tenantId: string;
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'cc:order:order.expired',
  source: 'cc',
};
