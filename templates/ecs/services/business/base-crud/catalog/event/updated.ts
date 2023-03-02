import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { BaseRepoEvent, baseRepo } from '../../repository/base';

export type Event = EventInterface<BaseRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = baseRepo.events.updated;
