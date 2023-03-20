import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { StripePayout, StripePayoutBuilder, StripePayoutCreate, StripePayoutStore } from '../entities';

export const stripePayoutRepo = repository<StripePayoutBuilder>({
  tableName: process.env.STRIPE_PAYOUT || process.env.TABLE!,
  repoName: 'stripe-payout',
  keySerialize: (key: StripePayoutBuilder['key']): StripePayoutBuilder['storeMapping']['key'] => {
    return {
      sk: `${key.userId}#${key.id}`,
      pk: `${key.tenantId}`,
    };
  },
  entitySerialize: (key: StripePayoutBuilder['key'], entityCreate: StripePayoutCreate): StripePayoutStore => {
    const mappedKey: StripePayoutBuilder['storeMapping']['key'] = {
      sk: `${key.userId}#${key.id}`,
      pk: `${key.tenantId}`,
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
      tenantId: pk,
      userId: sk.split('#')[0],
      id: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type StripePayoutRepoEvent = RepositoryEvent<StripePayoutBuilder>;
