import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Place } from 'services/business/place/entities';
import { Product } from 'services/business/product/entities';

export type InventoryBuilder = EntityBuilder<{
  name: 'inventory';
  body: {
    serialNumber?: string;
    placeId: string;
    place?: Omit<Place, 'createdAt' | 'updatedAt' | 'tenantId'>;
    productId: string;
    product?: Omit<Product, 'createdAt' | 'updatedAt' | 'tenantId' | 'category'>;
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
