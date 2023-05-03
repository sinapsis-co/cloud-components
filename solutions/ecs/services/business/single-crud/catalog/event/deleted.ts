import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { SingleKey } from '../../model/single-key';
import { repoSingle } from '../../repository/repo-single';

export type Event = EventInterface<SingleKey['Events']['deleted']>;

export const eventConfig: EventConfig<Event> = repoSingle.events.deleted;
