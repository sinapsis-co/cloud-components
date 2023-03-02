import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { PaymentClaim, PaymentClaimBuilder, PaymentClaimCreate, PaymentClaimStore } from '../entities/paymentClaim';

export const paymentClaimRepo = repository<PaymentClaimBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'payment-claim',
  keySerialize: (key: PaymentClaimBuilder['key']): PaymentClaimBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
  },
  entitySerialize: (key: PaymentClaimBuilder['key'], entityCreate: PaymentClaimCreate): PaymentClaimStore => {
    const mappedKey: PaymentClaimBuilder['storeMapping']['key'] = {
      pk: `${key.tenantId}`,
      sk: `${key.userId}#${key.id}`,
    };
    const timers: PaymentClaimBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: PaymentClaimStore): PaymentClaim => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      userId: sk.split('#')[0],
      id: sk.split('#')[1],
      tenantId: pk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type PaymentClaimRepoEvent = RepositoryEvent<PaymentClaimBuilder>;
