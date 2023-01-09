import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { payoutSettingUserApi } from 'services/payout-setting-user/catalog';
import { payoutUserRepo } from '../../repository';

export const handler = apiHandler<payoutSettingUserApi.updateSettingPayoutUser.Interface>(async (_, req) => {
  const { sub } = req.claims;
  const { id } = req.pathParams;

  const payoutUser = await payoutUserRepo.updateItem(
    {
      tenantId: sub,
      id,
    },
    {
      ...req.body,
    },
    {
      ReturnValues: 'ALL_OLD',
    }
  );
  if (payoutUser.isDefault && payoutUser.isDefault !== req.body.isDefault) {
    const { items } = await payoutUserRepo.listItem(sub, { limit: 100 });
    Promise.all(
      items
        .filter((a) => a.id !== id)
        .map(async (a) =>
          payoutUserRepo
            .updateItem(
              { tenantId: sub, id: a.id },
              { isDefault: false },
              {
                ConditionExpression: 'attribute_exists(pk) AND attribute_exists(sk)',
              }
            )
            .catch()
        )
    );
  }

  return { ...payoutUser, ...req.body };
}, payoutSettingUserApi.updateSettingPayoutUser.config);
