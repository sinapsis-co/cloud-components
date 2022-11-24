import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
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
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: StockStore): Stock => {
    const { pk, sk, createdAt, updatedAt, ...att } = entityStore;
    return {
      id: sk,
      tenantId: pk,
      ...att,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type StockRepoEvent = RepositoryEvent<StockBuilder>;
