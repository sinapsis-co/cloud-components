import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { InventoryAllocation } from '../../entities/inventory-allocation';

export type Event = EventInterface<{
    name: 'cc.inventory-allocation:order.expired';
    payload: InventoryAllocation;
}>;

export const eventConfig: EventConfig<Event> = {
    name: 'cc.inventory-allocation:order.expired',
    source: 'cc',
};