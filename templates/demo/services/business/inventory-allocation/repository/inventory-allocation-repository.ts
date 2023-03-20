import { repository } from '@sinapsis-co/cc-platform/repository';
import {
    InventoryAllocation,
    InventoryAllocationBuilder,
    InventoryAllocationCreate,
    InventoryAllocationStore
} from '../entities/inventory-allocation';

export const inventoryAllocationRepo = repository<InventoryAllocationBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'inventory-allocation',
  keySerialize: (key: InventoryAllocationBuilder['key']): InventoryAllocationBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.id,
    };
  },
  entitySerialize: (
    key: InventoryAllocationBuilder['key'],
    entityCreate: InventoryAllocationCreate
  ): InventoryAllocationStore => {
    const mappedKey: InventoryAllocationBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.id,
    };
    const timers: InventoryAllocationBuilder['storeMapping']['timers'] = {
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { ...mappedKey, ...entityCreate, ...timers };
  },
  entityDeserialize: (entityStore: InventoryAllocationStore): InventoryAllocation => {
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

