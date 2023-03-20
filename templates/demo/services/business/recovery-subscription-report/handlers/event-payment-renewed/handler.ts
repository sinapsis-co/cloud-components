import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { Canceled, InvoicePaid } from 'services/business/stripe-subscription/catalog/event';
import { recoverySubscriptionReportRepo } from '../../repository/recoverySubscriptionReport';

export const handler = eventHandler<InvoicePaid.Event | Canceled.Event>(async (event) => {
  const { tenantId, userId } = event.detail;
  const { items } = await recoverySubscriptionReportRepo.listItem(
    `${event.detail.tenantId}`,
    { limit: Number(50) },
    {
      KeyConditionExpression: '#pk = :pk AND begins_with(#sk, :sk)',
      ExpressionAttributeNames: {
        '#pk': 'pk',
        '#sk': 'sk',
      },
      ExpressionAttributeValues: {
        ':pk': `${tenantId}`,
        ':sk': `${userId}`,
      },
    }
  );
  await Promise.all(items.map((item) => recoverySubscriptionReportRepo.deleteItem(item)));
});
