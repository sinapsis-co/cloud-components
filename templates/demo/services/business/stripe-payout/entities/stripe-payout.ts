import { Entity, EntityBuilder, EntityCreate, EntityStore } from '@sinapsis-co/cc-platform-v2/repository/interface';
import { Payout } from 'services/business/payout/entities';

import Stripe from 'stripe';

export type StripePayoutBuilder = EntityBuilder<{
  name: 'stripe-payout';
  body: {
    status: 'paid' | 'pending' | 'failed' | 'in_transit' | 'canceled' | 'in_process';
    stripePayoutId?: string | null;
    stripeTransferId?: string | null;
    detailStripePayout?: Stripe.Payout | null;
    detailStripeTransfer?: Stripe.Transfer | null;
    detailPayout: Payout;
    amount: number;
    bathTopupId?: string | null;
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

export type StripePayout = Entity<StripePayoutBuilder>;

export type StripePayoutStore = EntityStore<StripePayoutBuilder>;

export type StripePayoutCreate = EntityCreate<
  StripePayoutBuilder,
  'stripePayoutId' | 'detailStripePayout' | 'detailStripeTransfer'
>;
