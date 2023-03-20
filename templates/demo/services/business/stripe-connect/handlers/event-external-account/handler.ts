import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { settingUserExternalPayout } from 'services/business/payout-setting-user/catalog/event';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { BY_STRIPE_ACCOUNT_IDX_NAME } from '../..';
import { accountExternal } from '../../catalog/event';
import { connectRepo } from '../../repository';

export const handler = eventHandler<accountExternal.createdExternal.Event>(async (event) => {
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const stripe = getStripeClient({ secrets });

  const result = await connectRepo.listItem(
    event.detail.account!,
    {
      limit: 1,
    },
    {
      IndexName: BY_STRIPE_ACCOUNT_IDX_NAME,
      KeyConditionExpression: '#accountId = :accountId',
      ExpressionAttributeNames: { '#accountId': 'accountId' },
      ExpressionAttributeValues: { ':accountId': event.detail.account! },
    }
  );
  const resultItem = result.items?.[0];
  if (!resultItem) {
    return;
  }

  const { external_accounts, payouts_enabled, charges_enabled, tos_acceptance, requirements } =
    await stripe.accounts.retrieve(event.detail.account!);

  const externalAccounts = external_accounts?.data[0];

  if (!externalAccounts) return;

  const type = externalAccounts.object === 'bank_account' ? 'stripeBank' : 'stripeCard';
  await dispatchEvent<settingUserExternalPayout.Event>(settingUserExternalPayout.eventConfig, {
    id: resultItem.accountId,
    tenantId: resultItem.tenantId,
    userId: resultItem.userId,
    provide: 'stripe',
    completed: Boolean(payouts_enabled && charges_enabled && tos_acceptance?.date),
    defaultCurrency: externalAccounts.currency as string,
    country: externalAccounts.country as string,
    provideId: externalAccounts.id,
    status: payouts_enabled && charges_enabled && tos_acceptance?.date ? 'active' : 'inactive',
    type,
    errors: requirements?.errors,
    disabledReason: requirements?.disabled_reason,
    details: {
      [type]: {
        provideTargetId: externalAccounts.id,
        provideId: resultItem.accountId,
        last4: externalAccounts.last4,
        brand: (externalAccounts as unknown as { brand: string }).brand,
        country: externalAccounts.country,
        bankName: (externalAccounts as unknown as { bank_name: string }).bank_name,
        currency: externalAccounts.currency,
      },
    },
  });
});
