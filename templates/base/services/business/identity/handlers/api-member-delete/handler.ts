import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { deleteCognitoUser } from '@sinapsis-co/cc-platform/integrations/cognito/admin-ops/delete-user';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { assetEvent } from 'services/business/assets/catalog';
import { identityApi } from 'services/business/identity/catalog';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';

export const handler = apiHandler<identityApi.memberDelete.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const profile = await userProfileRepository.deleteItem({ tenantId, id: `user#${id}` });
  await deleteCognitoUser(profile.email);
  if (profile.avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: profile.avatar,
    });
  return profile;
}, identityApi.memberDelete.config);
