import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { Inventory } from '../../entities';

export type Event = EventInterface<{
  name: 'cc.inventory:inventory.deleted';
  payload: Inventory;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'cc.inventory:inventory.deleted',
  source: 'cc',
};