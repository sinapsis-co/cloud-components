import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { settingUserExternalPayout } from '../../catalog/event';
import { payoutUserRepo } from '../../repository';

export const handler = eventHandler<settingUserExternalPayout.Event>(async ({ detail }) => {
  const { items } = await payoutUserRepo.listItem(detail.tenantId, {
    limit: 10,
  });

  const { isDefault } = items.find((a) => a.id === detail.id) || {
    isDefault: items.some((a) => a.isDefault) ? false : true,
  };
  await payoutUserRepo.createItem(
    { tenantId: detail.tenantId, id: detail.id, userId: detail.userId },
    {
      ...detail,
      isDefault,
    }
  );
});
