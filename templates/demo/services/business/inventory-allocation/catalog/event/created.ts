import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { InventoryAllocation } from '../../entities/inventory-allocation';

export type Event = EventInterface<{
    name: 'cc.inventory-allocation:inventory-allocation.created';
    payload: InventoryAllocation;
}>;

export const eventConfig: EventConfig<Event> = {
    name: 'cc.inventory-allocation:inventory-allocation.created',
    source: 'cc',
};