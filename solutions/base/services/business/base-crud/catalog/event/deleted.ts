import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { BaseRepoEvent, baseRepo } from '../../repository/repo-base';

export type Event = EventInterface<BaseRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = baseRepo.events.deleted;
