import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { baseRepo, BaseRepoEvent } from '../../repository/base';

export type Event = EventInterface<BaseRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = baseRepo.events.deleted;
