import { EventConfig, EventInterface } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { InvoiceRepoEvent, invoiceRepository } from '../../repository/invoice';

export type Event = EventInterface<InvoiceRepoEvent['updated']>;

export const eventConfig: EventConfig<Event> = invoiceRepository.events.updated;
