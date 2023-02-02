import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type PaymentClaimBuilder = EntityBuilder<{
  name: 'payment-claim';
  body: {
    attempts: number;
  };
  key: {
    userId: string;
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

export type PaymentClaim = Entity<PaymentClaimBuilder>;

export type PaymentClaimStore = EntityStore<PaymentClaimBuilder>;

export type PaymentClaimCreate = EntityCreate<PaymentClaimBuilder>;
