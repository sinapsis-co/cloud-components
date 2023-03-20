import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import {
    recoverySubscriptionReportRepo, RecoverySubscriptionReportRepoEvent
} from '../../repository/recoverySubscriptionReport';

export type Event = EventInterface<RecoverySubscriptionReportRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = recoverySubscriptionReportRepo.events.updated;
