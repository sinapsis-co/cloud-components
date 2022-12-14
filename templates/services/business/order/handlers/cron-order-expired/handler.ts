import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { orderIncomeExpired } from '../../catalog/event/income';
import { Order, OrderIncome } from '../../entities';
import { orderRepo } from '../../repository';

export const handler = async (): Promise<void> => {
  const { items } = await orderRepo.listItem(
    '',
    { limit: 1000 },
    {
      IndexName: 'orderStatus-index',
      KeyConditionExpression: 'orderStatus = :orderStatus',
      ExpressionAttributeValues: {
        ':orderStatus': 'PENDING',
      },
      ExpressionAttributeNames: undefined,
    }
  );

  const itemsToUpdate = items.filter(
    (item) =>
      item.orderType === 'INCOME' &&
      item.orderStatus === 'PENDING' &&
      new Date().getTime() >= (item.expiredAt as number)
  ) as (Order & OrderIncome)[];

  await Promise.all(
    itemsToUpdate.map(async ({ tenantId, orderId }) => {
      const orderExpired = await orderRepo.updateItem({ tenantId, orderId: orderId }, { orderStatus: 'EXPIRED' });
      await dispatchEvent<orderIncomeExpired.Event>(
        orderIncomeExpired.eventConfig,
        orderExpired as orderIncomeExpired.Event['payload']
      );
    })
  );
};
