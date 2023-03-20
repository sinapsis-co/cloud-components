import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { getOrCreateCustomer } from 'services/business/customer-gateway/lib';
import { OrderItem } from 'services/business/order/entities/order-item';
import { orderRepo } from 'services/business/order/repository';
import { secretsStripe } from 'services/support/stripe/catalog';
import { transactionCreate } from '../../../transaction/catalog/event';
import * as api from '../../catalog/api';
import * as Event from '../../catalog/event';
import { parseStripeDate } from '../../lib/parse-stripe-date';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

const TRIAL_DURATION_IN_DAYS = Number(process.env.TRIAL_DURATION_IN_DAYS || 0);

export const handler = apiHandler<api.createSubscription.Interface>(async (_, request) => {
  const { tenantId, email, sub } = request.claims;

  const order = await orderRepo.getItem({ tenantId, orderId: request.body.orderId, userId: sub }).catch(() => {
    throw new ApiError('ORDER_NOT_FOUND', 404, `Order ${request.body.orderId} not found`);
  });

  if (order.orderType !== 'INCOME') {
    throw new ApiError('ORDER_NOT_INCOME', 400, `Order ${request.body.orderId} type is not income`);
  }

  const isExpired = new Date().getTime() >= (order.expiredAt as number);

  if (order.orderStatus !== 'PENDING' || isExpired) {
    if (isExpired) {
      await orderRepo.updateItem(
        {
          tenantId,
          userId: sub,
          orderId: request.body.orderId,
        },
        {
          orderStatus: 'EXPIRED',
        }
      );
    }
    throw new ApiError('ORDER_NOT_PENDING', 400, `Order ${request.body.orderId} status is not pending`);
  }

  const { identifier } = order.orderItem[0] as OrderItem;
  const { productId, priceId } = identifier?.externalRefs?.stripe || {};

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const customer = await getOrCreateCustomer({
    secrets,
    tenantId,
    customer: request.claims,
    sub: request.claims.sub,
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
  }).catch(async (error) => {
    await Promise.all([
      await dispatchEvent<Event.PaymentFailedFirst.Event>(Event.PaymentFailedFirst.eventConfig, {
        tenantId: request.claims.tenantId,
        userId: request.claims.sub,
        payload: error,
        order,
      }),
      await dispatchEvent<transactionCreate.Event>(transactionCreate.eventConfig, {
        payload: error,
        order,
        orderId: order.orderId,
        errorMessage: error.message,
        userId: request.claims.tenantId,
      }),
    ]);

    throw error;
  });

  const subscription = await subscriptionRepository.createItem(
    { tenantId, subscriptionId: id, userId: sub },
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

  await dispatchEvent<Event.Created.Event>(Event.Created.eventConfig, {
    tenantId,
    userId: sub,
    subscription,
    order,
  });

  return subscription;
}, api.createSubscription.config);
