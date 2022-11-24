import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type InventoryBuilder = EntityBuilder<{
  name: 'inventory';
  body: {
    serialNumber?: string;
    place: string;
    product: string;
    status?: 'AVAILABLE' | 'NOT_AVAILABLE' | 'EXPIRED';
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

export type Inventory = Entity<InventoryBuilder>;

export type InventoryStore = EntityStore<InventoryBuilder>;

export type InventoryCreate = EntityCreate<InventoryBuilder>;
