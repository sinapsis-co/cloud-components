import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type StockBuilder = EntityBuilder<{
  name: 'stock';
  body: {
    category: string;
    place: string;
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
