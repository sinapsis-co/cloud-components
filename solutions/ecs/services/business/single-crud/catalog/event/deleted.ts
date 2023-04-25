import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { BaseRepoEvent, singleRepo } from '../../repository/repo-single';

export type Event = EventInterface<BaseRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = singleRepo.events.deleted;
