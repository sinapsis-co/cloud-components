import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import {
  RecoverySubscriptionReportRepoEvent,
  recoverySubscriptionReportRepo,
} from '../../repository/recoverySubscriptionReport';

export type Event = EventInterface<RecoverySubscriptionReportRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = recoverySubscriptionReportRepo.events.created;
