import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { payoutSuccess } from 'services/business/payout/catalog/event/payout';
import { balanceRepo } from '../../repository';

export const handler = eventHandler<payoutSuccess.Event>(async (event) => {
  await balanceRepo.updateItem(
    {
      tenantId: event.detail.tenantId,
      userId: event.detail.userId,
    },
    {},
    {
      UpdateExpression: 'SET #inTransitToBank = #inTransitToBank - :amount',
      ConditionExpression: '#inTransitToBank >= :amount',
      ExpressionAttributeNames: {
        '#inTransitToBank': 'inTransitToBank',
      },
      ExpressionAttributeValues: {
        ':amount': event.detail.amount,
      },
    }
  );
});
