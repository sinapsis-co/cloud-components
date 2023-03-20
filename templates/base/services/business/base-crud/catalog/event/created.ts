import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { baseRepo, BaseRepoEvent } from '../../repository/base';

export type Event = EventInterface<BaseRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = baseRepo.events.created;
