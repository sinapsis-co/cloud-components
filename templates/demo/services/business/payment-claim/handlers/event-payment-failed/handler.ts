import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { PaymentFailedTemplate } from 'notifications/templates/payment-failed';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { PaymentFailed } from 'services/business/stripe-subscription/catalog/event';
import { notificationEvent } from 'services/support/notifications/catalog';
import { paymentClaimRepo } from '../../repository/paymentClaim';

export const handler = eventHandler<PaymentFailed.Event>(async (event) => {
  const { tenantId, userId } = event.detail;

  const { items } = await paymentClaimRepo.listItem(
    `${event.detail.tenantId}`,
    { limit: Number(1) },
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

  const itemsSub = items.filter((a) => a.id === (event.detail.subscriptionId || event.detail.orderId || userId));
  await Promise.all(
    itemsSub.map(async (item) => {
      await paymentClaimRepo.updateItem(
        {
          tenantId,
          userId,
          id: item.id,
        },
        {
          attempts: item.attempts + 1,
        }
      );
    })
  );

  if (itemsSub.length === 0) {
    await paymentClaimRepo.createItem(
      {
        tenantId,
        userId,
        id: `${event.detail.subscriptionId || event.detail.orderId || userId}`,
      },
      {
        attempts: 1,
      }
    );
  }

  const client = await userProfileRepository.getItem(
    { tenantId, id: userId },
    {
      TableName: process.env.USER_PROFILE!,
    }
  );

  await dispatchEvent<notificationEvent.dispatch.Event<PaymentFailedTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: client.email,
    template: {
      templateName: 'payment-failed',
      payload: {
        currentYear: new Date().toLocaleDateString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        projectName: process.env.PROJECT_NAME!,
      },
    },
  });
});
