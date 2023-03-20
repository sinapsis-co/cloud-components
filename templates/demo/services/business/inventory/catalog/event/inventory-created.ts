import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { Inventory } from '../../entities';

export type Event = EventInterface<{
  name: 'cc.inventory:inventory.created';
  payload: Inventory;
}>;

export const eventConfig: EventConfig<Event> = {
  name: 'cc.inventory:inventory.created',
  source: 'cc',
};