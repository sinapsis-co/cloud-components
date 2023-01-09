import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { Payout } from 'services/business/payout/entities';
import { StripePayout } from '../../entities';
import { stripePayoutRepo } from '../../repository';

export const handler = async ({ payout }: { payout: Payout }): Promise<StripePayout> => {
  return stripePayoutRepo.createItem(
    { tenantId: payout.tenantId, id: uuid(), userId: payout.userId },
    {
      amount: payout.amount * 100,
      detailPayout: payout,
      status: 'pending',
    }
  );
};
