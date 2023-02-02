import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type InvoiceStatus = 'paid' | 'overdue' | 'refund' | 'draft';

export type InvoiceBuilder = EntityBuilder<{
  name: 'invoice';
  body: {
    stripeId: string;
    status: InvoiceStatus;
    description: string;
    url: string;
    amount: number;
    orderId: string;
    subscriptionId?: string;
    invoiceDate: string;
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

export type Invoice = Entity<InvoiceBuilder>;

export type InvoiceStore = EntityStore<InvoiceBuilder>;

export type InvoiceCreate = EntityCreate<InvoiceBuilder>;
