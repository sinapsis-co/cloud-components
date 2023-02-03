import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { Order, OrderWithdrawal } from 'services/business/order/entities';
import { PayoutUser } from 'services/business/payout-setting-user/entities';
import { Payout } from '../../entities';
import { payoutRepo } from '../../repository';

export const handler = async ({
  settingPayout,
  order,
}: {
  order: Order & OrderWithdrawal;
  settingPayout: PayoutUser;
}): Promise<Payout> => {
  return await payoutRepo.createItem(
    {
      id: uuid(),
      tenantId: order.tenantId,
      userId: order.userId,
    },
    {
      target: settingPayout,
      status: 'PENDING',
      order,
      amount: order.orderAmount,
      provide: settingPayout.provide,
    }
  );
};
