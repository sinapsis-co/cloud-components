import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';

export type Event = EventInterface<{
  name: 'order.paid';
  payload: {
    order: {
      tenantId: string;
      id: string;
      categoryId: string;
      userId: string;
      status: string;
      subscriptionId: string
    };
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'order.paid',
  source: 'app',
};
