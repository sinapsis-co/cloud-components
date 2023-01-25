import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Payout, PayoutBuilder, PayoutCreate, PayoutStore } from '../entities';

export const payoutRepo = repository<PayoutBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'payout',
  keySerialize: (key: PayoutBuilder['key']): PayoutBuilder['storeMapping']['key'] => {
    return {
      pk: `${key.tenantId}#${key.userId}`,
      sk: `${key.id}`,
    };
  },
  entitySerialize: (key: PayoutBuilder['key'], entityCreate: PayoutCreate): PayoutStore => {
    const mappedKey: PayoutBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.id}`,
    };
    const timers: PayoutBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { status: 'PENDING', ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: PayoutStore): Payout => {
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

export type PayoutRepoEvent = RepositoryEvent<PayoutBuilder>;
