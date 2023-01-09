import { Order, OrderWithdrawal } from 'services/business/order/entities';
import { PayoutUser } from '../../entities';
import { payoutUserRepo } from '../../repository';

export const handler = async ({ order }: { order: Order & OrderWithdrawal }): Promise<PayoutUser> => {
  const { tenantId, orderPayoutSettingId } = order;
  const data = await payoutUserRepo.getItem({ tenantId, id: orderPayoutSettingId, userId: order.userId });

  if (data.errors?.length) {
    throw new Error('Payout setting with error');
  }

  if (data.status === 'inactive') {
    throw new Error('Payout setting inactive');
  }

  return data;
};
