import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { PaymentFailed } from 'services/business/stripe-subscription/catalog/event';
import { recoverySubscriptionReportRepo } from '../../repository/recoverySubscriptionReport';

export const handler = eventHandler<PaymentFailed.Event>(async (event) => {
  const { tenantId, orderId, subscriptionId, userId, reason } = event.detail;
  await recoverySubscriptionReportRepo.createItem(
    {
      tenantId,
      id: orderId || subscriptionId || uuid(),
      userId,
    },
    {
      orderId: orderId,
      subscriptionId: subscriptionId,
      reason: reason || 'subscription_failed',
      payload: JSON.stringify(event.detail),
      userId,
    }
  );
});
