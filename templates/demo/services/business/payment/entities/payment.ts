import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform/repository/interface';
import { PaymentAcceptedCurrencies } from './payment-currency';
import { GatewayAvailable } from './payment-gateway';

export type PaymentMethodDetails = {
  card?: {
    brand: string;
    country: string;
    last4: string;
  };
  type: 'card';
};

export type PaymentBuilder = EntityBuilder<{
  name: 'payment';
  body: {
    orderId: string;
    paymentMethod?: {
      gateway: GatewayAvailable;
      paymentMethodDetails: PaymentMethodDetails;
    };
    currency: PaymentAcceptedCurrencies;
    customer: {
      email: string;
      givenName: string;
      familyName: string;
    };
    description?: string;
    status: 'FAILED' | 'SUCCESS' | 'PENDING' | 'ERROR';
    tax?: number | null;
    subTotal: number;
    total: number;
    receiptUrl?: string;
    gateway: GatewayAvailable;
    hasError?: boolean;
    error?: {
      code: string;
      message: string;
    };
  };
  key: {
    tenantId: string;
    paymentIntentId: string;
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

export type Payment = Entity<PaymentBuilder>;
export type PaymentStore = EntityStore<PaymentBuilder>;
export type PaymentCreate = EntityCreate<PaymentBuilder>;
