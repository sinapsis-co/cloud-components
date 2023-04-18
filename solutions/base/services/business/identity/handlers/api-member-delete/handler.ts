import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { deleteCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { assetEvent } from 'services/business/assets/catalog';
import { identityApi } from 'services/business/identity/catalog';
import { userRepository } from '../../repository/user-repository';

export const handler = apiHandler<identityApi.memberDelete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const profile = await userRepository.deleteItem({ tenantId, id });
  await deleteCognitoUser(profile.email);
  if (profile.avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: profile.avatar,
    });
  return profile;
}, identityApi.memberDelete.config);
