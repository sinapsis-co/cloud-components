import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Order } from 'services/business/order/entities';
import { Price, Product } from 'services/business/stripe-product/entities';

export type SubscriptionStatus =
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'trialing'
  | 'unpaid';

export type SubscriptionBuilder = EntityBuilder<{
  name: 'subscription';
  body: {
    orderId?: string;
    order?: Partial<Order>;
    deleteAt?: Date;
    currentPeriodEnd?: Date;
    cancelAtEnd: boolean;
    email: string;
    status: SubscriptionStatus;
    seats: number;
    trialDaysDuration?: number;
    coupon?: string;
    product?: Partial<Product>;
    price?: Partial<Price>;
    stripeId?: string;
    paymentMethodAttached?: string;
  };
  key: {
    tenantId: string;
    subscriptionId: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: Date;
    currentPeriodEnd?: Date;
  };
  storeMapping: {
    key: {
      pk: string;
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
      deleteAt?: string;
      currentPeriodEnd?: string;
    };
  };
}>;

export type Subscription = Entity<SubscriptionBuilder>;
export type SubscriptionStore = EntityStore<SubscriptionBuilder>;
export type SubscriptionCreate = EntityCreate<SubscriptionBuilder>;
