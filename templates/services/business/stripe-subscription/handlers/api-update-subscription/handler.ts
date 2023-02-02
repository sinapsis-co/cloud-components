import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { customerRepository } from 'services/business/customer-gateway/repository';
import { secretsStripe } from 'services/support/stripe/catalog';
import * as api from '../../catalog/api';
import * as Event from '../../catalog/event';
import { SubscriptionBuilder } from '../../entities/subscription';
import { stripeSubscription } from '../../platform';
import { subscriptionRepository } from '../../repository';

export const handler = apiHandler<api.updateSubscription.Interface>(async (_, request) => {
  const { tenantId, email, sub } = request.claims;
  const { product, price, paymentMethodId, coupon } = request.body;

  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const { update, paymentMethods } = stripeSubscription({ secrets });

  const [originalSubscription, customer] = await Promise.all([
    subscriptionRepository.getItem({ tenantId, subscriptionId: request.pathParams.subscriptionId, userId: sub }),
    customerRepository.getItem({ tenantId, userId: sub }),
  ]);

  const priceId = price?.externalRefs?.find((e) => e.provider === 'stripe')?.id;

  if (originalSubscription.stripeId && priceId && customer.stripeId) {
    await update({
      subscriptionId: originalSubscription.stripeId,
      priceId,
      customerId: customer.stripeId,
      email,
      paymentMethodId,
      coupon,
    });
  }

  const changes: Partial<SubscriptionBuilder['body']> = {
    product,
    price,
    cancelAtEnd: false,
    status: paymentMethodId && originalSubscription.status === 'trialing' ? 'active' : originalSubscription.status,
    email,
  };

  if (paymentMethodId) {
    const stripePaymentMethod = await paymentMethods.retrieve(paymentMethodId);
    changes.paymentMethodAttached = stripePaymentMethod.card?.last4;
  }

  const updatedSubscription = await subscriptionRepository.updateItem(
    { subscriptionId: request.pathParams.subscriptionId, tenantId, userId: sub },
    changes
  );

  await dispatchEvent<Event.Updated.Event>(Event.Updated.eventConfig, {
    customerId: tenantId,
    subscription: updatedSubscription,
    paymentMethodId,
    coupon,
  });

  return updatedSubscription;
}, api.updateSubscription.config);
