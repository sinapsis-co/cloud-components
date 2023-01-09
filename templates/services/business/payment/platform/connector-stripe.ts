import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { getOrCreateCustomer } from 'services/business/stripe-customer/lib';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { PaymentInvoiceParams } from 'services/support/stripe/platform/stripe/invoice-stripe';
import { payInvoiceStripe } from 'services/support/stripe/platform/stripe/invoice/pay-invoice';
import Stripe from 'stripe';
import { HandlerPaymentConnector } from '../entities/payment-connector';

export const paymentStripe: HandlerPaymentConnector = async (data, claims) => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const { stripeId } = await getOrCreateCustomer({
    secrets,
    tenantId: claims.tenantId,
    customer: claims,
    sub: claims.sub,
  });

  const client = getStripeClient({ secrets });

  const paymentCreate: Omit<PaymentInvoiceParams, 'items'> = {
    ...data,
    stripeId,
    paymentMethodId: data.paymentMethod,
    amount: data.total,
    user: claims,
    invoiceId: data.invoiceId,
  };

  const { pay, charge } = await payInvoiceStripe(client, { ...paymentCreate });

  const chargeCard = charge?.payment_method_details as Stripe.Charge.PaymentMethodDetails;
  return {
    paymentMethodDetails: {
      card: {
        brand: chargeCard.card?.brand as string,
        country: chargeCard.card?.country as string,
        last4: chargeCard.card?.last4 as string,
      },
      type: 'card',
    },
    chargeId: charge.id!,
    status: charge.status === 'succeeded' ? 'SUCCESS' : 'FAILED',
    receiptUrl: charge.receipt_url!,
    metadata: pay,
  };
};
