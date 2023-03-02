import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { InventoryAllocation } from '../../entities/inventory-allocation';

export type Event = EventInterface<{
  name: 'cc.inventory-allocation:inventory-allocation.cancelled';
  payload: InventoryAllocation;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'cc.inventory-allocation:inventory-allocation.cancelled',
  source: 'cc',
};
