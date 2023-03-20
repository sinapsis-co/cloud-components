import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';

export type PayoutTargetAvailable = 'bank';

export type PayoutBank = {
  provideId: string;
};

export type PayoutPaypal = {
  email: string;
};

export type PayoutStatus = 'PENDING' | 'PAID' | 'FAILED' | 'CANCELED' | 'PROCESSING' | 'ERROR';

export type PayoutBuilder = EntityBuilder<{
  name: 'payout';
  body: {
    // wip is order
    order: any;
    // wip its type of PayoutUser
    target?: any;
    status: PayoutStatus;
    amount: number;
    provide: string;
    completedAt?: string;
    error?: any;
    identifier?: Record<string, string>;
  };
  key: {
    tenantId: string;
    userId: string;
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

export type Payout = Entity<PayoutBuilder>;

export type PayoutStore = EntityStore<PayoutBuilder>;

export type PayoutCreate = EntityCreate<PayoutBuilder, 'status'>;
