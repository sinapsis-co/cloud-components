import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { categoryRepo, CategoryRepoEvent } from '../../repository/category-repository';

export type Event = EventInterface<CategoryRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = categoryRepo.events.deleted;