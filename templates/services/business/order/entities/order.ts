import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { OrderAcceptedCurrencies } from './order-currency';
import { OrderCustomer } from './order-customer';
import { OrderItem } from './order-item';
import { OrderSeller } from './order-seller';

export type OrderStatus = 'PENDING' | 'SUCCESS' | 'CANCELLED' | 'REFUNDED' | 'EXPIRED' | 'PROCESS' | 'FAILED';

export type OrderType = 'INCOME' | 'WITHDRAWAL';

export type OrderIncome = {
  orderItem: OrderItem[];
  orderTotal: number;
  orderPlatformFee?: number;
  orderSubTotal: number;
  orderTax: number;
  seller?: OrderSeller;
  priceCurrency: OrderAcceptedCurrencies;
  paymentUrl?: string;
  paymentMethod?: {
    gateway: string;
    paymentMethodDetails: {
      card?: {
        brand: string;
        country: string;
        last4: string;
      };
      type: 'card';
    };
  };
  partOfInvoice?: {
    invoiceId: string;
  };
  subscriptionId?: string;
  hasReview?: boolean;
  sellerId?: string;
  sellerTransferred?: string;
  sellerAvailableAt?: number;
  sellerTransferredProcessedAt?: string;
  partOfSeller?: number;
  partOfPlatform?: number;
  partOfGateway?: number;
  isProposal?: boolean;
  categoryId?: string;
};

export type OrderWithdrawal = {
  orderAmount: number;
  orderPayoutSettingId: string;
  // TODO: add more types
  orderPayoutSetting?: null;
};

export type OrderBodyTypeT<K = OrderType, V = void> = { orderType: K } & V;

export type OrderBody = {
  orderDate: string;
  orderStatus: OrderStatus;
  orderSuccessAt?: string;
  customer: OrderCustomer;
  customerId: string;
  error?: any;
  identifier?: Record<string, any>;
  orderType: OrderType;
  description?: string;
  expiredAt?: number | null;
};

export type OrderBuilder = EntityBuilder<{
  name: 'order';
  body: OrderBody & (OrderBodyTypeT<'INCOME', OrderIncome> | OrderBodyTypeT<'WITHDRAWAL', OrderWithdrawal>);
  key: {
    tenantId: string;
    orderId: string;
    userId: string;
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
