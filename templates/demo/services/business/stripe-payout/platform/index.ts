import { StripeConfig, StripeRepo, getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { StripePayout } from '../entities';
import { getBalance } from './get-balance';
import { payout } from './payout';
import { rechargeBalance } from './recharge';
import { transferToConnect } from './transfer';

export interface StripeSubscription {
  getBalance: (currency?: string) => Promise<Stripe.Balance.Available>;
  rechargeBalance: (amount: number, currency?: string) => Promise<Stripe.Topup>;
  transferToConnect: (
    amount: number,
    stripeAccount: string,
    currency?: string,
    params?: Partial<Stripe.TransferCreateParams>
  ) => Promise<Stripe.Transfer>;
  payout: (data: StripePayout) => Promise<Stripe.Payout | undefined>;
}

const stripePayout = (config: StripeConfig): StripeSubscription & StripeRepo => {
  const stripe = getStripeClient(config);

  return {
    ...stripe,
    getBalance: getBalance(stripe),
    rechargeBalance: rechargeBalance(stripe),
    transferToConnect: transferToConnect(stripe),
    payout: payout(stripe),
  };
};

export default stripePayout;
