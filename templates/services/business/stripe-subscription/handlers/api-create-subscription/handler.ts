import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { getOrCreateCustomer } from 'services/business/stripe-customer/lib';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as api from '../../catalog/api';
import * as event from '../../catalog/event';
import { parseStripeDate } from '../../lib/parse-stripe-date';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

const TRIAL_DURATION_IN_DAYS = Number(process.env.TRIAL_DURATION_IN_DAYS || 7);

export const handler = apiHandler<api.createSubscription.Interface>(async (_, request) => {
  const { tenantId, email } = request.claims;
  const { product, price, paymentMethodId, coupon } = request.body;

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const customer = await getOrCreateCustomer({
    secrets,
    tenantId,
    customer: request.claims,
  });

  const { create, retrievePaymentMethod } = stripeSubscription({ secrets });
  let paymentMethodAttached: string | undefined;
  if (paymentMethodId) {
    const stripePaymentMethod = await retrievePaymentMethod(paymentMethodId);
    paymentMethodAttached = stripePaymentMethod.card?.last4;
  }

  const { status, current_period_end, id } = await create({
    customer,
    price,
    email,
    trialDaysDuration: TRIAL_DURATION_IN_DAYS,
    paymentMethod: paymentMethodId,
  });

  const subscription = await subscriptionRepository.createItem(
    { customerId: tenantId },
    {
      cancelAtEnd: false,
      status: status,
      seats: 1,
      currentPeriodEnd: parseStripeDate(current_period_end),
      trialDaysDuration: TRIAL_DURATION_IN_DAYS,
      coupon,
      product,
      price,
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
