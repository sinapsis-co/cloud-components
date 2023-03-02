import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import Stripe from 'stripe';

export type PayoutUserBuilder = EntityBuilder<{
  name: 'setting-payout-user';
  body: {
    provide: string;
    provideId: string;
    completed: boolean;
    defaultCurrency: 'USD' | string;
    country?: string;
    errors?: Stripe.Account.Requirements.Error[] | null;
    disabledReason?: Stripe.Account.Requirements['disabled_reason'] | null;
    isDefault?: boolean;
    details: {
      paypal?: {
        type?: 'email';
        email: string;
      };
      stripeBank?: {
        provideTargetId: string;
        provideId: string;
        bankName: string;
        currency: string;
        last4: string;
      };
      stripeCard?: {
        provideTargetId: string;
        provideId: string;
        brand: string;
        currency: string;
        last4: string;
      };
    };
    type: 'stripeBank' | 'stripeCard' | 'paypal';
    status: 'active' | 'inactive';
  };
  key: {
    userId: string
    tenantId: string;
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

export type PayoutUser = Entity<PayoutUserBuilder>;

export type PayoutUserStore = EntityStore<PayoutUserBuilder>;

export type PayoutUserCreate = EntityCreate<PayoutUserBuilder>;
