import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { balanceRepo } from 'services/balance/repository';
import { payoutSuccess } from 'services/payout/catalog/event/payout';

export const handler = eventHandler<payoutSuccess.Event>(async (event) => {
  await balanceRepo.updateItem(
    {
      tenantId: event.detail.tenantId,
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
