import { PlatformError } from '@sinapsis-co/cc-sdk/error';
import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { deleteCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { assetEvent } from '@sinapsis-co/cc-services/business/assets/catalog';
import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';

import { identityApi } from '../../catalog';
import { userRepository } from '../../repository/repo-user';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;

  const profile = await userRepository
    .deleteItem(
      { tenantId, id },
      {
        ConditionExpression: 'attribute_not_exists(#tenantOwner)',
        ExpressionAttributeNames: { '#tenantOwner': 'tenantOwner' },
      }
    )
    .catch((e) => {
      if (e instanceof PlatformError && e.errorCode === 'ERROR_CONDITIONAL_CHECK_FAILED') {
        throw new CustomError({
          code: 'ERROR_IDENTITY_INVALID_USER_FOR_DELETE',
          detail: 'You can not delete the owner of the tenant',
        });
      } else throw e;
    });
  await deleteCognitoUser(profile.email);
  if (profile.avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: profile.avatar,
    });
  return profile;
}, identityApi.memberDelete.definition);
