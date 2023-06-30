import { EventConfig, EventInterface } from '@sinapsis-co/cc-sdk/catalog/event';
import { LandingModel } from '../../model/landing';
import { repoLanding } from '../../repository/repo-landing';

export type Event = EventInterface<LandingModel['Events']['updated']>;

export const eventConfig: EventConfig<Event> = repoLanding.events.updated;
