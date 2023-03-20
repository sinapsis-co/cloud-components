import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { Inventory } from '../../entities';

export type Event = EventInterface<{
  name: 'cc.inventory:inventory.updated';
  payload: Inventory;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'cc.inventory:inventory.updated',
  source: 'cc',
};