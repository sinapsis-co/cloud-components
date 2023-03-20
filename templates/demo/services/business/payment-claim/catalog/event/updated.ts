import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform/catalog/event';
import { paymentClaimRepo, PaymentClaimRepoEvent } from '../../repository/paymentClaim';

export type Event = EventInterface<PaymentClaimRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = paymentClaimRepo.events.updated;
