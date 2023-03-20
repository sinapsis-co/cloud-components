import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';
import { Order } from 'services/business/order/entities';
import { Payment } from 'services/business/payment/entities';

export type TransactionStatus = 'PENDING' | 'SUCCESS' | 'CANCELLED' | 'ERROR';

export type TransactionBuilder = EntityBuilder<{
  name: 'transaction';
  body: {
    orderId: string;
    order: Order;
    payment?: Payment;
    paymentId?: string;
    transaction?: Transaction;
    payload?: any;
    status?: TransactionStatus;
    errorMessage?: any;
    errorPayment?: any;
    userId: string;
  };
  key: {
    tenantId: string;
    orderId: string;
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

export type Transaction = Entity<TransactionBuilder>;

export type TransactionStore = EntityStore<TransactionBuilder>;

export type TransactionCreate = EntityCreate<TransactionBuilder>;
