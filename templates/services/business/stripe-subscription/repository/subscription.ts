import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { Subscription, SubscriptionBuilder, SubscriptionCreate, SubscriptionStore } from '../entities/subscription';

export const subscriptionRepository = repository<SubscriptionBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'subscription',

  keySerialize: (key: SubscriptionBuilder['key']): SubscriptionBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `${key.userId}#${key.subscriptionId}`,
    };
  },

  entitySerialize: (key: SubscriptionBuilder['key'], entityCreate: SubscriptionCreate): SubscriptionStore => {
    const mappedKey: SubscriptionBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.userId}#${key.subscriptionId}`,
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
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      userId: sk.split('#')[0],
      subscriptionId: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
      deleteAt: att.deleteAt ? new Date(att.deleteAt) : undefined,
      currentPeriodEnd: att.currentPeriodEnd ? new Date(att.currentPeriodEnd) : undefined,
    };
  },
});
