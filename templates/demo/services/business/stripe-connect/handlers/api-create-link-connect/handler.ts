import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';
import { metaDataUser } from 'services/support/stripe/utils/user-metadata';
import * as api from '../../catalog/api';
import { TYPE_STRIPE_CONNECT } from '../../lib/config';
import { connectRepo } from '../../repository';

export const handler = apiHandler<api.createLinkAccount.Interface>(async (_, request) => {
  const { sub, email, tenantId } = request.claims;

  const checkAccount = await connectRepo.getItem({ tenantId, userId: sub }).catch(() => undefined);
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);
  const { accounts, accountLinks } = getStripeClient({ secrets });

  if (checkAccount?.accountId) {
    const { url } = await accountLinks.create({
      type: 'account_onboarding',
      account: checkAccount.accountId,
      return_url: `${process.env.WEB_URL}/dashboard?wait=ok`,
      refresh_url: `${process.env.WEB_URL}/dashboard`,
    });

    return {
      url,
    };
  }

  const { id } = await accounts.create({
    type: TYPE_STRIPE_CONNECT,
    metadata: {
      ...metaDataUser(request.claims),
      tenantId: sub,
    },
    email,
    business_type: 'individual',
    business_profile: {
      name: `${request.claims.given_name} ${request.claims.family_name}`,
      product_description: 'Sale of services in App',
      support_email: email,
      support_url: `${process.env.WEB_URL}/support`,
    },
    individual: {
      first_name: request.claims.given_name,
      last_name: request.claims.family_name,
      email,
    },
    settings: {
      payouts: {
        schedule: {
          interval: 'manual',
        },
      },
    },
  });

  const [{ url }] = await Promise.all([
    accountLinks.create({
      type: 'account_onboarding',
      account: id,
      return_url: `${process.env.WEB_URL}/dashboard`,
      refresh_url: `${process.env.WEB_URL}/dashboard`,
    }),
    connectRepo.createItem({ tenantId, userId: sub }, { accountId: id }),
  ]);

  return {
    url,
  };
}, api.createLinkAccount.config);
