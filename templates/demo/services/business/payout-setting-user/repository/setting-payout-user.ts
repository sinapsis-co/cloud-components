import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { PayoutUser, PayoutUserBuilder, PayoutUserCreate, PayoutUserStore } from '../entities';

export const payoutUserRepo = repository<PayoutUserBuilder>({
  tableName: process.env.SETTING_PAYOUT_USER_ACCOUNT || process.env.TABLE!,
  repoName: 'setting-payout-user',
  keySerialize: (key: PayoutUserBuilder['key']): PayoutUserBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: `${key.userId}#${key.id}`,
    };
  },
  entitySerialize: (key: PayoutUserBuilder['key'], entityCreate: PayoutUserCreate): PayoutUserStore => {
    const mappedKey: PayoutUserBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: `${key.userId}#${key.id}`,
    };
    const timers: PayoutUserBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: PayoutUserStore): PayoutUser => {
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

export type PayoutUserRepoEvent = RepositoryEvent<PayoutUserBuilder>;
