import { repository } from '@sinapsis-co/cc-platform-v2/repository';
import { RepositoryEvent } from '@sinapsis-co/cc-platform-v2/repository/interface';
import {
  InventoryAllocation,
  InventoryAllocationBuilder,
  InventoryAllocationCreate,
  InventoryAllocationStore,
} from '../entities/inventory-allocation';

export const inventoryAllocationRepo = repository<InventoryAllocationBuilder>({
  tableName: process.env.TABLE!,
  repoName: 'inventory-allocation',
  keySerialize: (key: InventoryAllocationBuilder['key']): InventoryAllocationBuilder['storeMapping']['key'] => {
    return {
      pk: key.tenantId,
      sk: key.orderId,
    };
  },
  entitySerialize: (
    key: InventoryAllocationBuilder['key'],
    entityCreate: InventoryAllocationCreate
  ): InventoryAllocationStore => {
    const mappedKey: InventoryAllocationBuilder['storeMapping']['key'] = {
      pk: key.tenantId,
      sk: key.orderId,
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
      ...att,
      tenantId: pk,
      orderId: sk,
      createdAt: new Date(createdAt),
      updatedAt: new Date(updatedAt),
    };
  },
});

export type InventoryAllocationEvent = RepositoryEvent<InventoryAllocationBuilder> & {
  toBeDelivered: {
    name: `app.${InventoryAllocationBuilder['name']}.toBeDelivered`;
    payload: InventoryAllocation;
  };
};
