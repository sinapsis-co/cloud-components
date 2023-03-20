import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { otherRepo, OtherRepoEvent } from '../../repository/other';

export type Event = EventInterface<OtherRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = otherRepo.events.created;
