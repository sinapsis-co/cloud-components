import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type PayoutBuilder = EntityBuilder<{
  name: 'category';
  body: {
    name: string;
    description: string;
  };
  key: {
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export type Payout = Entity<PayoutBuilder>;

export type PayoutStore = EntityStore<PayoutBuilder>;

export type PayoutCreate = EntityCreate<PayoutBuilder>;
