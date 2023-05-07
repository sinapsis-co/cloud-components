import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { assetEvent } from '@sinapsis-co/cc-services/support/assets/catalog';

import { userRepository } from '../../repository/repo-user';

export const handler = eventHandler<assetEvent.assetUploaded.Event>(async (event) => {
  const { key, meta } = event.detail;
  const { tenantId, sub } = meta;
  const { avatar } = await userRepository.updateItem(
    { tenantId, id: sub },
    { avatar: key },
    { ReturnValues: 'ALL_OLD' }
  );
  if (avatar)
    await dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
      assetType: 'avatar',
      key: avatar,
    });
});
