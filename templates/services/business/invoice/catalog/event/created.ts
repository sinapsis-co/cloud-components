import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { InvoiceRepoEvent, invoiceRepository } from '../../repository/invoice';

export type Event = EventInterface<InvoiceRepoEvent['created']>;

export const eventConfig: EventConfig<Event> = invoiceRepository.events.created;
