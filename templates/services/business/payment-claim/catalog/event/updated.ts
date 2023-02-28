import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { PaymentClaimRepoEvent, paymentClaimRepo } from '../../repository/paymentClaim';

export type Event = EventInterface<PaymentClaimRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = paymentClaimRepo.events.updated;