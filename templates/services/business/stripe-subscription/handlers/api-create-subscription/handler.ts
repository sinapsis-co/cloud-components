import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { OrderItem } from 'services/business/order/entities/order-item';
import { orderRepo } from 'services/business/order/repository';
import { getOrCreateCustomer } from 'services/business/stripe-customer/lib';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as api from '../../catalog/api';
import * as event from '../../catalog/event';
import { parseStripeDate } from '../../lib/parse-stripe-date';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

const TRIAL_DURATION_IN_DAYS = Number(process.env.TRIAL_DURATION_IN_DAYS || 0);

export const handler = apiHandler<api.createSubscription.Interface>(async (_, request) => {
  const { tenantId, email } = request.claims;
  const order = await orderRepo.getItem({ tenantId, orderId: request.body.orderId });

  if (order.orderType !== 'INCOME') {
    throw new ApiError('Order type is not income');
  }

  if (order.orderStatus !== 'PENDING' || new Date().getTime() >= (order.expiredAt as number)) {
    throw new ApiError('Order status is not pending or expired');
  }
  const { identifier } = order.orderItem[0] as OrderItem;
  const { productId, priceId } = identifier?.externalRefs?.stripe || {};

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const customer = await getOrCreateCustomer({
    secrets,
    tenantId,
    customer: request.claims,
  });

  const { create, retrievePaymentMethod } = stripeSubscription({ secrets });
  let paymentMethodAttached: string | undefined;
  if (request.body.paymentMethodId) {
    const stripePaymentMethod = await retrievePaymentMethod(request.body.paymentMethodId);
    paymentMethodAttached = stripePaymentMethod.card?.last4;
  }

  const { status, current_period_end, id } = await create({
    customer,
    price: {
      externalRefs: [
        {
          id: priceId as string,
          provider: 'stripe',
        },
      ],
    },
    email,
    trialDaysDuration: TRIAL_DURATION_IN_DAYS,
    paymentMethod: request.body.paymentMethodId,
    order,
  });

  const subscription = await subscriptionRepository.createItem(
    { tenantId, subscriptionId: id },
    {
      orderId: request.body.orderId,
      order: { ...order, subscriptionId: id },
      cancelAtEnd: false,
      status: status,
      seats: 1,
      currentPeriodEnd: parseStripeDate(current_period_end),
      trialDaysDuration: TRIAL_DURATION_IN_DAYS,
      product: {
        id: productId as string,
      },
      price: {
        id: priceId as string,
      },
      stripeId: id,
      paymentMethodAttached,
      email,
    }
  );

  await dispatchEvent<event.Subscription.Created.Event>(event.Subscription.Created.eventConfig, {
    customerId: tenantId,
    subscription,
  });

  return subscription;
}, api.createSubscription.config);
