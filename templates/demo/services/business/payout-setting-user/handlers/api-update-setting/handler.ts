import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { payoutSettingUserApi } from '../../catalog';
import { payoutUserRepo } from '../../repository';

export const handler = apiHandler<payoutSettingUserApi.updateSettingPayoutUser.Interface>(async (_, req) => {
  const { sub, tenantId } = req.claims;
  const { id } = req.pathParams;

  const payoutUser = await payoutUserRepo.updateItem(
    {
      tenantId,
      userId: sub,
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
              { tenantId: tenantId, id: a.id, userId: sub },
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
