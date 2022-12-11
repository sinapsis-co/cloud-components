import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
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
    deleteAt?: Date;
    currentPeriodEnd?: Date;
    cancelAtEnd: boolean;
    email: string;
    status: SubscriptionStatus;
    seats: number;
    trialDaysDuration?: number;
    coupon?: string;
    product?: Product;
    price?: Price;
    stripeId?: string;
    paymentMethodAttached?: string;
  };
  key: {
    customerId: string;
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
      sk: 'SUBSCRIPTION';
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
