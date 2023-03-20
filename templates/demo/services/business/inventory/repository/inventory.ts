import { repository } from '@sinapsis-co/cc-platform/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform/repository/interface';
import { Inventory, InventoryBuilder, InventoryCreate, InventoryStore } from '../entities/inventory';

export const inventoryRepo = repository<InventoryBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'inventory',
  keySerialize: (key: InventoryBuilder['key']): InventoryBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id
    };
  },
  entitySerialize: (key: InventoryBuilder['key'], entityCreate: InventoryCreate): InventoryStore => {
    const mappedKey: InventoryBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id
    };
    const timers: InventoryBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: InventoryStore): Inventory => {
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

export type InventoryRepoEvent = RepositoryEvent<InventoryBuilder>;
