import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Stock, StockBuilder, StockCreate, StockStore } from '../entities/stock';

export const stockRepo = repository<StockBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'stock',
  keySerialize: (key: StockBuilder['key']): StockBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id
    };
  },
  entitySerialize: (key: StockBuilder['key'], entityCreate: StockCreate): StockStore => {
    const mappedKey: StockBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id
    };
    const timers: StockBuilder['storeMapping']['timers'] = {
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: StockStore): Stock => {
    const { pk, sk, updatedAt, ...att } = entityStore;
    return {
      id: sk,
      tenantId: pk,
      ...att,
      updatedAt: new Date(updatedAt),
    };
  },
});

export type StockRepoEvent = RepositoryEvent<StockBuilder>;
