import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { assetEvent } from 'services/business/assets/catalog';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';

export const handler = eventHandler<assetEvent.assetUploaded.Event>(async (event) => {
  const { key, meta } = event.detail;
  const { tenantId, sub } = meta;
  const { avatar } = await userProfileRepository.updateItem(
    { tenantId, id: `user#${sub}` },
    { avatar: key },
    { ReturnValues: 'ALL_OLD' }
  );
  if (avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: avatar,
    });
});
