import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Balance, BalanceBuilder, BalanceCreate, BalanceStore } from '../entities';

export const balanceRepo = repository<BalanceBuilder>({
  tableName: process.env.BALANCE_TABLE || process.env.TABLE!,
  repoName: 'transaction-balance',
  keySerialize: (key: BalanceBuilder['key']): BalanceBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
    };
  },
  entitySerialize: (key: BalanceBuilder['key'], entityCreate: BalanceCreate): BalanceStore => {
    const mappedKey: BalanceBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
    };
    const timers: BalanceBuilder['storeMapping']['timers'] = {
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: BalanceStore): Balance => {
    const { pk, updatedAt, ...att } = entityStore;
    return {
      ...att,
      tenantId: pk,
      updatedAt: new Date(updatedAt),
    };
  },
});

export type BalanceRepoEvent = RepositoryEvent<BalanceBuilder>;
