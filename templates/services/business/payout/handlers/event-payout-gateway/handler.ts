import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { payoutFailed, payoutGatewayExternal, payoutSuccess } from 'services/payout/catalog/event/payout';
import { payoutRepo } from '../../repository/payout';

export const handler = eventHandler<payoutGatewayExternal.Event>(async (event) => {
  const {
    status,
    completedAt,
    error,
    identifier,
    payout: { id, tenantId },
  } = event.detail;

  const item = await payoutRepo.updateItem(
    {
      tenantId,
      id,
    },
    {
      status,
      completedAt,
      error,
      identifier,
    }
  );

  if (item.status === 'PAID') {
    await dispatchEvent<payoutSuccess.Event>(payoutSuccess.eventConfig, {
      ...item,
    });
  } else if (item.status !== 'PROCESSING') {
    await dispatchEvent<payoutFailed.Event>(payoutFailed.eventConfig, {
      ...item,
    });
  }
});
