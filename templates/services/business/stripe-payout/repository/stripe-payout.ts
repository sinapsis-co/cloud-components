import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { StripePayout, StripePayoutBuilder, StripePayoutCreate, StripePayoutStore } from '../entities';

export const stripePayoutRepo = repository<StripePayoutBuilder>({
  tableName: process.env.STRIPE_PAYOUT || process.env.TABLE!,
  repoName: 'stripe-payout',
  keySerialize: (key: StripePayoutBuilder['key']): StripePayoutBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}#${key.userId}`,
      sk: `${key.id}`,
    };
  },
  entitySerialize: (key: StripePayoutBuilder['key'], entityCreate: StripePayoutCreate): StripePayoutStore => {
    const mappedKey: StripePayoutBuilder['storeMapping']['key'] = {
      pk: `${key.tenantId}#${key.userId}`,
      sk: `${key.id}`,
    };
    const timers: StripePayoutBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: StripePayoutStore): StripePayout => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk.split('#')[0],
      userId: pk.split('#')[1],
      id: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type StripePayoutRepoEvent = RepositoryEvent<StripePayoutBuilder>;
