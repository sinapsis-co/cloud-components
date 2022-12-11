import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';

export type InvoiceStatus = 'paid' | 'overdue' | 'refund';

export type InvoiceBuilder = EntityBuilder<{
  name: 'invoice-stripe';
  body: {
    stripeId: string;
    status: InvoiceStatus;
    description: string;
    url: string;
    amount: number;
  };
  key: {
    customerId: string;
    id: string;
    invoiceDate: Date;
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
