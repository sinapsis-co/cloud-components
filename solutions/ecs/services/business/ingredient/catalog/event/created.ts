import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { IngredientModel } from '../../model/ingredient';
import { repoIngredient } from '../../repository/repo-ingredient';

export type Event = EventInterface<IngredientModel['Events']['created']>;

export const eventConfig: EventConfig<Event> = repoIngredient.events.created;
