import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { baseRepo, BaseRepoEvent } from '../../repository/base';

export type Event = EventInterface<BaseRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = baseRepo.events.updated;
