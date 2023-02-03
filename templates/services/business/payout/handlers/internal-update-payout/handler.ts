import { Payout } from '../../entities';
import { payoutRepo } from '../../repository';

export const handler = async ({
  payout,
  payoutId,
  tenantId,
  userId,
}: {
  payout: Partial<Payout>;
  tenantId: string;
  payoutId: string;
  userId: string;
}): Promise<Payout> => {
  return await payoutRepo.updateItem(
    {
      id: payoutId,
      tenantId,
      userId,
    },
    payout
  );
};
