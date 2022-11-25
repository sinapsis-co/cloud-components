import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Place } from 'services/business/place/entities';

export type StockBuilder = EntityBuilder<{
  name: 'stock';
  body: {
    category: { id: string, name: string };
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
