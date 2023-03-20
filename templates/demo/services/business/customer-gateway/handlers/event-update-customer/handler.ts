import { getSecret } from '@sinapsis-co/cc-platform/config/secret/get-secret';
import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { UserProfileRepoEvent } from 'services/business/identity/repository/user-profile-repository';
import { secretsStripe } from 'services/support/stripe/catalog';
import { getStripeClient } from 'services/support/stripe/platform';

import { customerRepository } from '../../repository';

export const handler = eventHandler<UserProfileRepoEvent['updated']>(async (event) => {
  const user = event.detail;
  const secrets = await getSecret<secretsStripe.stripe.Secret>(secretsStripe.stripe.secretConfig);

  const customer = await customerRepository.getItem({ tenantId: user.tenantId, userId: user.id });

  const { customers } = getStripeClient({ secrets });

  const address = {
    postal_code: user.location?.zipCode,
    line1: user.location?.address,
    city: user.location?.city,
    state: user?.location?.state,
    country: user?.location?.countryCode,
  };

  await customers.update(customer.stripeId, {
    name: `${user.givenName} ${user.familyName}`,
    address,
    shipping: {
      address,
      name: `${user.givenName} ${user.familyName}`,
    },
  });
});
