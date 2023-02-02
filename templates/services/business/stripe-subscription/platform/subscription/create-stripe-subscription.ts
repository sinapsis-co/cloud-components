import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { Customer } from 'services/business/customer-gateway/entities';
import { Order, OrderIncome } from 'services/business/order/entities';
import { PriceCreate } from 'services/business/stripe-product/entities/price';
import { Stripe, StripeRepo } from 'services/support/stripe/platform';

export interface ParamsCreateStripeSubscription {
  customer: Customer;
  email: string;
  price: Pick<PriceCreate, 'externalRefs'>;
  trialDaysDuration?: number;
  paymentMethod?: string;
  order?: Order & OrderIncome;
}

export const createStripeSubscription =
  (stripe: StripeRepo) =>
  async ({
    order,
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
        tenantId: customer.tenantId,
        userId: customer.userId,
        orderInitial: order?.orderId as string,
        orderId: order?.orderId as string,
        orderItemNumber: order?.orderItem[0].orderItemNumber as string,
        orderItemCategory: order?.orderItem[0].orderItemCategory as string,
      },
      default_payment_method: paymentMethod,
    });

    return stripeSubscription;
  };
