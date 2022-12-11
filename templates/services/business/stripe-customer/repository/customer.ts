import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Customer, CustomerBuilder, CustomerCreate, CustomerStore } from '../entities/customer';

export const customerRepository = repository<CustomerBuilder>({
  tableName: process.env.CUSTOMER_TABLE || process.env.TABLE!,
  repoName: 'customer-stripe',

  keySerialize: (key: CustomerBuilder['key']): CustomerBuilder['storeMapping']['key'] => {
    return { pk: key.tenantId, sk: 'CUSTOMER' };
  },

  entitySerialize: (key: CustomerBuilder['key'], entityCreate: CustomerCreate): CustomerStore => {
    const mappedKey: CustomerBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: 'CUSTOMER',
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
    const { pk, createdAt, updatedAt, ...att } = entityStore;
    return {
      tenantId: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});
