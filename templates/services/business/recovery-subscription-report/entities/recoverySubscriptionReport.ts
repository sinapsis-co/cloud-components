import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type RecoverySubscriptionReportBuilder = EntityBuilder<{
  name: 'recoverySubscriptionReport';
  body: {
    subscriptionId?: string;
    orderId?: string;
    reason: string;
    payload: any;
    userId: string;
  };
  key: {
    tenantId: string;
    id: string;
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

export type RecoverySubscriptionReport = Entity<RecoverySubscriptionReportBuilder>;

export type RecoverySubscriptionReportStore = EntityStore<RecoverySubscriptionReportBuilder>;

export type RecoverySubscriptionReportCreate = EntityCreate<RecoverySubscriptionReportBuilder>;
