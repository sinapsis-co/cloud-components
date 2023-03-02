import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { deleteCognitoUser } from '@sinapsis-co/cc-platform-v2/integrations/cognito/admin-ops/delete-user';
import { identityApi } from 'services/business/identity/catalog';
import { assetEvent } from 'services/business/assets/catalog';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';

export const handler = apiHandler<identityApi.memberDelete.Interface>(async (_, req) => {
  const { tenantId, sub, email } = req.claims;
  const [profile] = await Promise.all([
    userProfileRepository.deleteItem({ tenantId, id: sub }),
    deleteCognitoUser(email),
  ]);
  if (profile.avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: profile.avatar,
    });
  return profile;
}, identityApi.memberDelete.config);
