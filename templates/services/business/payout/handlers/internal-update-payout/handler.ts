import { Payout } from 'services/payout/entities';
import { payoutRepo } from 'services/payout/repository';

export const handler = async ({
  payout,
  payoutId,
  tenantId,
}: {
  payout: Partial<Payout>;
  tenantId: string;
  payoutId: string;
}): Promise<Payout> => {
  return await payoutRepo.updateItem(
    {
      id: payoutId,
      tenantId,
    },
    payout
  );
};
