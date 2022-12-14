import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Customer } from 'services/business/stripe-customer/entities/customer';
import { PriceCreate } from 'services/business/stripe-product/entities/price';
import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export interface ParamsCreateStripeSubscription {
  customer: Customer;
  email: string;
  price: Pick<PriceCreate, 'externalRefs'>;
  trialDaysDuration?: number;
  paymentMethod?: string;
}

export const createStripeSubscription =
  (stripe: StripeRepo) =>
  async ({
    customer,
    email,
    price,
    trialDaysDuration = 0,
    paymentMethod,
  }: ParamsCreateStripeSubscription): Promise<Stripe.Subscription> => {
    if (!customer.stripeId) {
      throw new ApiError('STRIPE_CONNECTOR.MISSING_CUSTOMER_ID', 400, JSON.stringify({ customer, price }));
    }

    if (!price) {
      throw new ApiError('STRIPE_CONNECTOR.MISSING_PRICE', 400, JSON.stringify({ customer, price }));
    }

    await stripe.customers.update(customer.stripeId, {
      email,
    });

    const stripePrice = price.externalRefs?.find((e) => e.provider === 'stripe');

    if (!stripePrice) {
      throw new ApiError('STRIPE_CONNECTOR.MISSING_STRIPE_PRICE', 400, JSON.stringify({ customer, price }));
    }

    if (paymentMethod) {
      const { data } = await stripe.customers.listPaymentMethods(customer.stripeId!, { type: 'card' });
      if (!data.find((e) => e.id === paymentMethod)) {
        const { id } = await stripe.paymentMethods.attach(paymentMethod, {
          customer: customer.stripeId,
        });
        paymentMethod = id;
      }
    }

    const stripeSubscription: Stripe.Subscription = await stripe.subscriptions.create({
      customer: customer.stripeId,
      trial_period_days: trialDaysDuration,
      items: [{ price: stripePrice.id, quantity: 1 }],
      metadata: {
        customerId: customer.tenantId,
      },
      default_payment_method: paymentMethod,
    });

    return stripeSubscription;
  };
