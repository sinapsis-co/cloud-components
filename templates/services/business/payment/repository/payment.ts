import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Payment, PaymentBuilder, PaymentCreate, PaymentStore } from '../entities';

export const paymentRepository = repository<PaymentBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'payment',

  keySerialize: (key: PaymentBuilder['key']): PaymentBuilder['storeMapping']['key'] => {
    return { pk: key.tenantId, sk: key.paymentIntentId };
  },

  entitySerialize: (key: PaymentBuilder['key'], entityCreate: PaymentCreate): PaymentStore => {
    const mappedKey: PaymentBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.paymentIntentId,
    };
    const timers: PaymentBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    };
  },

  entityDeserialize: (entityStore: PaymentStore): Payment => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      tenantId: pk,
      paymentIntentId: sk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type PaymentRepoEvent = RepositoryEvent<PaymentBuilder>;
