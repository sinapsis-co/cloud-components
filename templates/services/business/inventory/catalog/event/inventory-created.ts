import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { InventoryRepoEvent, inventoryRepo } from '../../repository/inventory';

export type Event = EventInterface<InventoryRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = inventoryRepo.events.created;
