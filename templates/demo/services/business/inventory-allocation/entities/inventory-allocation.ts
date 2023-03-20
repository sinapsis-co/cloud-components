import {
    Entity,
    EntityBuilder,
    EntityCreate,
    EntityStore,
    EntityUpdate
} from '@sinapsis-co/cc-platform/repository/interface';
import { Inventory } from 'services/business/inventory/entities';

export type InventoryAllocationStatus = 'RESERVED' | 'TO_BE_DELIVERED' | 'ASSIGNED' | 'EXPIRED' | 'CANCELLED';

export type InventoryAllocationBuilder = EntityBuilder<{
  name: 'inventory-allocation';
  body: {
    orderId: string;
    orders: string[];
    userId: string;
    inventoryId: string;
    inventory: Pick<Inventory, 'product' | 'place'>;
    categoryId: string;
    placeId: string;
    status: InventoryAllocationStatus;
    subscriptionId?: string;
    deleted?: boolean;
  };
  key: {
    tenantId: string;
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type InventoryAllocation = Entity<InventoryAllocationBuilder>;

export type InventoryAllocationStore = EntityStore<InventoryAllocationBuilder>;

export type InventoryAllocationCreate = EntityCreate<InventoryAllocationBuilder>;

export type InventoryAllocationUpdate = Pick<EntityUpdate<InventoryAllocationBuilder>, 'status'>;
