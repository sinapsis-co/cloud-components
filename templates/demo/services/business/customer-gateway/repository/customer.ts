import { repository } from '@sinapsis-co/cc-platform/repository';
import { Customer, CustomerBuilder, CustomerCreate, CustomerStore } from '../entities/customer';

export const customerRepository = repository<CustomerBuilder>({
  tableName: process.env.CUSTOMER_TABLE || process.env.TABLE!,
  repoName: 'customer-gateway',

  keySerialize: (key: CustomerBuilder['key']): CustomerBuilder['storeMapping']['key'] => {
    return { pk: key.tenantId, sk: key.userId };
  },

  entitySerialize: (key: CustomerBuilder['key'], entityCreate: CustomerCreate): CustomerStore => {
    const mappedKey: CustomerBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.userId,
    };
    const timers: CustomerBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as CustomerStore;
  },

  entityDeserialize: (entityStore: CustomerStore): Customer => {
    const { sk, pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
