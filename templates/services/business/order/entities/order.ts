import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { UserProfile } from 'services/business/identity/entities';
import { OrderAcceptedCurrencies } from './order-currency';
import { OrderItem } from './order-product';

export type OrderStatus = 'refund' | 'paid';

export type PaymentMethodDetails = {
  card?: {
    brand: string;
    country: string;
    last4: string;
  };
  type: 'card';
};

export type OrderBuilder = EntityBuilder<{
  name: 'order';
  body: {
    currency: OrderAcceptedCurrencies;
    paymentMethod: {
      gateway: string;
      paymentMethodDetails: PaymentMethodDetails;
    };
    items: OrderItem[];
    description?: string;
    customer: Partial<UserProfile>;
    data: {
      approvedBy?: string;
      authorizedDate?: Date;
      cancelReason?: string;
      cancelledBy?: string;
      discountValue?: string;
      invoiceUrl: string;
    };
    isCompleted: boolean;
    status: OrderStatus;
    tax: number;
    subTotal: number;
    total: number;
    targetTransfer?: string;
    metadata?: Record<string, string | number>;
  };
  key: {
    tenantId: string;
    orderId: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
  storeMapping: {
    key: {
      sk: string;
      pk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;
export type Order = Entity<OrderBuilder>;
export type OrderStore = EntityStore<OrderBuilder>;
export type OrderCreate = EntityCreate<OrderBuilder>;
