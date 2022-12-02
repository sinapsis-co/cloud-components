import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { InventoryAllocationEvent, inventoryAllocationRepo } from '../../repository/inventory-allocation-repository';

export type Event = EventInterface<InventoryAllocationEvent['created']>;

export const eventConfig: EventConfig<Event> = inventoryAllocationRepo.events.created;
