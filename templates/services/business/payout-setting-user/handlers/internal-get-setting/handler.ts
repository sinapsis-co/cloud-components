import { Order, OrderWithdrawal } from 'services/order/entities';
import { PayoutUser } from 'services/payout-setting-user/entities';
import { payoutUserRepo } from 'services/payout-setting-user/repository';

export const handler = async ({ order }: { order: Order & OrderWithdrawal }): Promise<PayoutUser> => {
  const { tenantId, orderPayoutSettingId } = order;
  const data = await payoutUserRepo.getItem({ tenantId, id: orderPayoutSettingId });

  if (data.errors?.length) {
    throw new Error('Payout setting with error');
  }

  if (data.status === 'inactive') {
    throw new Error('Payout setting inactive');
  }

  return data;
};
