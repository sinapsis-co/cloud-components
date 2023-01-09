import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { Order, OrderWithdrawal } from 'services/order/entities';
import { PayoutUser } from 'services/payout-setting-user/entities';
import { Payout } from 'services/payout/entities';
import { payoutRepo } from 'services/payout/repository';

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
