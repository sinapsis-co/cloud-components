import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { PaymentFailedFirst } from 'services/business/stripe-subscription/catalog/event';
import { recoverySubscriptionReportRepo } from '../../repository/recoverySubscriptionReport';

export const handler = eventHandler<PaymentFailedFirst.Event>(async (event) => {
  const { tenantId, userId, order } = event.detail;
  await recoverySubscriptionReportRepo.createItem(
    {
      tenantId,
      id: order.orderId,
      userId,
    },
    {
      reason: 'first_subscription_failed',
      payload: JSON.stringify(event.detail),
      userId,
      orderId: order.orderId,
    }
  );
});
