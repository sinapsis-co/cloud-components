import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Invoice, InvoiceBuilder, InvoiceCreate, InvoiceStore } from '../entities/invoice';

export const invoiceRepository = repository<InvoiceBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'invoice-stripe',

  keySerialize: (key: InvoiceBuilder['key']): InvoiceBuilder['storeMapping']['key'] => {
    return { pk: key.customerId, sk: `INVOICE#${key.invoiceDate}#${key.id}` };
  },

  entitySerialize: (key: InvoiceBuilder['key'], entityCreate: InvoiceCreate): InvoiceStore => {
    const mappedKey: InvoiceBuilder['storeMapping']['key'] = {
      pk: key.customerId,
      sk: `INVOICE#${key.invoiceDate.toISOString()}#${key.id}`,
    };
    const timers: InvoiceBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as InvoiceStore;
  },

  entityDeserialize: (entityStore: InvoiceStore): Invoice => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    const [, invoiceDate, id] = sk.split('#');
    return {
      customerId: pk,
      id,
      invoiceDate: new Date(invoiceDate),
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
