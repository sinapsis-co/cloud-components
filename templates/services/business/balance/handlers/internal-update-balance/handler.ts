import { Balance } from 'services/balance/entities';
import { balanceRepo } from 'services/balance/repository';

export const handler = async ({
  tenantId,
  amount,
  type,
}: {
  tenantId: string;
  amount: string;
  type: 'pending' | 'inTransitToBank' | 'rollback';
}): Promise<Balance> => {
  const balance = await balanceRepo
    .getItem(
      { tenantId },
      {
        ConsistentRead: true,
      }
    )
    .catch(() => ({ pending: 0, available: 0, inTransitToBank: 0, updatedAt: new Date() }));

  if (type === 'pending') {
    balance.pending = balance.pending + Number(amount) || 0;
  }

  if (type === 'inTransitToBank') {
    if (Number(amount) > balance.available) {
      throw new Error('Insufficient funds');
    }
    balance.inTransitToBank = balance.inTransitToBank + Number(amount) || 0;
    balance.available = balance.available - Number(amount) || 0;
  }

  if (type === 'rollback') {
    balance.inTransitToBank = balance.inTransitToBank - Number(amount) || 0;
    balance.available = balance.available + Number(amount) || 0;
  }

  return balanceRepo.updateItem(
    {
      tenantId,
    },
    {
      ...balance,
    }
  );
};
