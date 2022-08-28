import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { OtherRepoEvent, otherRepo } from '../../repository/other';

export type Event = EventInterface<OtherRepoEvent['deleted']>;

export const eventConfig: EventConfig<Event> = otherRepo.events.deleted;
