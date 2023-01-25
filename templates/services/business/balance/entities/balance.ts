import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type BalanceBuilder = EntityBuilder<{
  name: 'transaction-balance';
  body: {
    pending: number;
    available: number;
    inTransitToBank: number;
  };
  key: {
    userId: string;
    tenantId: string;
  };
  timers: {
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      sk: string;
      pk: string;
    };
    timers: {
      updatedAt: string;
    };
  };
}>;

export type Balance = Entity<BalanceBuilder>;

export type BalanceStore = EntityStore<BalanceBuilder>;

export type BalanceCreate = EntityCreate<BalanceBuilder>;
