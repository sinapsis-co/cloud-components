import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Subscription, SubscriptionBuilder, SubscriptionCreate, SubscriptionStore } from '../entities/subscription';

export const subscriptionRepository = repository<SubscriptionBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'subscription',

  keySerialize: (key: SubscriptionBuilder['key']): SubscriptionBuilder['storeMapping']['key'] => {
    return { pk: key.customerId, sk: 'SUBSCRIPTION' };
  },

  entitySerialize: (key: SubscriptionBuilder['key'], entityCreate: SubscriptionCreate): SubscriptionStore => {
    const mappedKey: SubscriptionBuilder['storeMapping']['key'] = {
      pk: key.customerId,
      sk: 'SUBSCRIPTION',
    };
    const timers: SubscriptionBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deleteAt: entityCreate.deleteAt ? entityCreate.deleteAt.toISOString() : undefined,
      currentPeriodEnd: entityCreate.currentPeriodEnd ? entityCreate.currentPeriodEnd.toISOString() : undefined,
    };

    return {
      ...mappedKey,
      ...entityCreate,
      ...timers,
    } as SubscriptionStore;
  },

  entityDeserialize: (entityStore: SubscriptionStore): Subscription => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      customerId: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
      deleteAt: att.deleteAt ? new Date(att.deleteAt) : undefined,
      currentPeriodEnd: att.currentPeriodEnd ? new Date(att.currentPeriodEnd) : undefined,
    };
  },
});
