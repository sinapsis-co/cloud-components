import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type ConnectBuilder = EntityBuilder<{
  name: 'connect';
  body: {
    accountId: string;
  };
  key: {
    tenantId: string;
    userId: string;
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
export type Connect = Entity<ConnectBuilder>;
export type ConnectStore = EntityStore<ConnectBuilder>;
export type ConnectCreate = EntityCreate<ConnectBuilder>;
