import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Invoice, InvoiceBuilder, InvoiceCreate, InvoiceStore } from '../entities/invoice';

export const invoiceRepository = repository<InvoiceBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'invoice',
  keySerialize: (key: InvoiceBuilder['key']): InvoiceBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
  },
  entitySerialize: (key: InvoiceBuilder['key'], entityCreate: InvoiceCreate): InvoiceStore => {
    const mappedKey: InvoiceBuilder['storeMapping']['key'] = {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
    const timers: InvoiceBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: InvoiceStore): Invoice => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk.split('#')[0],
      id: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type InvoiceRepoEvent = RepositoryEvent<InvoiceBuilder>;
