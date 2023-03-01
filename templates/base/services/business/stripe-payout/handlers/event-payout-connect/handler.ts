import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { payoutGatewayExternal } from 'services/business/payout/catalog/event/payout';
import { Webhook } from 'services/support/stripe/catalog/event';
import Stripe from 'stripe';
import { StripePayout } from '../../entities';
import { stripePayoutRepo } from '../../repository';

export const handler = eventHandler<Webhook.PayoutPaid.Event>(async (event) => {
  const payout: Stripe.Payout = event.detail.data.object as Stripe.Payout;

  if (!(payout?.metadata?.tenantId && payout?.metadata?.payoutAppId)) {
    return;
  }
  const payoutStripe = await stripePayoutRepo.updateItem(
    { tenantId: payout.metadata.tenantId, id: payout.metadata.payoutAppId, userId: payout.metadata.userId },
    {
      detailStripePayout: payout,
      status: payout.status as StripePayout['status'],
    }
  );

  await dispatchEvent<payoutGatewayExternal.Event>(payoutGatewayExternal.eventConfig, {
    status: payoutStripe.status === 'paid' ? 'PAID' : 'FAILED',
    payout: payoutStripe.detailPayout,
    error: {
      failure_balance_transaction: payoutStripe.detailStripePayout?.failure_balance_transaction,
      failure_code: payoutStripe.detailStripePayout?.failure_code,
      failure_message: payoutStripe.detailStripePayout?.failure_message,
    },
    completedAt: new Date((payoutStripe.detailStripePayout?.arrival_date || 0) * 1000).toISOString(),
    identifier: {
      payoutExternalServiceName: 'stripe-payout',
      payoutExternalId: payoutStripe.id!,
    },
  });
});
