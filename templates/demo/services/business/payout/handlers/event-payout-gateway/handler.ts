import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { payoutFailed, payoutGatewayExternal, payoutSuccess } from '../../catalog/event/payout';
import { payoutRepo } from '../../repository/payout';

export const handler = eventHandler<payoutGatewayExternal.Event>(async (event) => {
  const {
    status,
    completedAt,
    error,
    identifier,
    payout: { id, tenantId, userId },
  } = event.detail;

  const item = await payoutRepo.updateItem(
    {
      tenantId,
      id,
      userId,
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
