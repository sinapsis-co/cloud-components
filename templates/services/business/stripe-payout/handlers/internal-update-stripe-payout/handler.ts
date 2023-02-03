import { StripePayout } from '../../entities';
import { stripePayoutRepo } from '../../repository';

export const handler = async ({
  stripePayout,
  tenantId,
  stripePayoutId,
  userId,
}: {
  stripePayout: Partial<StripePayout>;
  tenantId: string;
  stripePayoutId: string;
  userId: string;
}): Promise<StripePayout> => {
  return stripePayoutRepo.updateItem(
    { tenantId, id: stripePayoutId, userId },
    {
      ...stripePayout,
    }
  );
};
