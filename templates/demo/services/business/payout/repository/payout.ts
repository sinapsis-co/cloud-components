import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Payout, PayoutBuilder, PayoutCreate, PayoutStore } from '../entities';

export const payoutRepo = repository<PayoutBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'payout',
  keySerialize: (key: PayoutBuilder['key']): PayoutBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `${key.userId}#${key.id}`,
    };
  },
  entitySerialize: (key: PayoutBuilder['key'], entityCreate: PayoutCreate): PayoutStore => {
    const mappedKey: PayoutBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.userId}#${key.id}`,
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
      tenantId: pk,
      userId: sk.split('#')[0],
      id: sk.split('#')[1],
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type PayoutRepoEvent = RepositoryEvent<PayoutBuilder>;
