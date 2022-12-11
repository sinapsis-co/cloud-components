import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type CustomerBuilder = EntityBuilder<{
  name: 'customer-stripe';
  body: {
    stripeId: string;
    fullName: string;
    email: string;
  };
  key: {
    tenantId: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      pk: string;
      sk: 'CUSTOMER';
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
