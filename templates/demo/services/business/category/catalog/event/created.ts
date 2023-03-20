import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { categoryRepo, CategoryRepoEvent } from '../../repository/category-repository';

export type Event = EventInterface<CategoryRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = categoryRepo.events.created;
