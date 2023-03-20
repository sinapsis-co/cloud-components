import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';
import { Category } from 'services/business/category/entities/category';
import { Place } from 'services/business/place/entities';

export type StockBuilder = EntityBuilder<{
  name: 'stock';
  body: {
    category: Omit<Category, 'createdAt' | 'updatedAt' | 'tenantId' | 'description' | 'categoryId'>
    place: Omit<Place, 'createdAt' | 'updatedAt' | 'tenantId'>;
    amount: number;
  };
  key: {
    tenantId: string;
    id: string;
  };
  timers: {
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
      sk: string;
    };
    timers: {
      updatedAt: string;
    };
  };
}>;

export type Stock = Entity<StockBuilder>;

export type StockStore = EntityStore<StockBuilder>;

export type StockCreate = EntityCreate<StockBuilder>;
