import { PlatformError } from '@sinapsis-co/cc-sdk/error';
import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { deleteCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';
import { assetEvent } from '@sinapsis-co/cc-services/support/assets/catalog';

import { identityApi, identityEvent } from '../../catalog';
import { userRepository } from '../../repository/repo-user';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;

  const user = await userRepository
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

  const dispatch = [deleteCognitoUser(user.email), dispatchEvent(identityEvent.memberDeleted.eventConfig, user)];

  if (user.avatar) {
    dispatch.push(
      dispatchEvent(assetEvent.assetToRemove.eventConfig, {
        assetType: 'avatar',
        key: user.avatar,
      })
    );
  }

  await Promise.all(dispatch);

  return user;
}, identityApi.memberDelete.definition);
