import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';

export type CustomerBuilder = EntityBuilder<{
  name: 'customer-gateway';
  body: {
    stripeId: string;
    fullName: string;
    email: string;
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

export type Customer = Entity<CustomerBuilder>;
export type CustomerStore = EntityStore<CustomerBuilder>;
export type CustomerCreate = EntityCreate<CustomerBuilder>;
