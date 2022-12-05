import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Category } from 'services/business/category/entities/category';

export type Event = EventInterface<{
  name: 'order.created';
  payload: {
    order: {
      tenantId: string;
      orderId: string;
      categoryId: string;
      userId: string;
      status: string,
      id: string
      category: Pick<Category, 'id' | 'name'>
    };
  };
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'order.created',
  source: 'app',
};
