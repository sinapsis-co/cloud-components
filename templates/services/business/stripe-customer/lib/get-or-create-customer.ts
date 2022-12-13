import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { getStripeClient, StripeConfig } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { Customer } from '../entities/customer';
import { customerRepository } from '../repository';

interface ParamsGetOrCreateCustomer {
  tenantId: string;
  secrets?: StripeConfig['secrets'];
  customer?: UserClaims;
}
export const getOrCreateCustomer = async (
  { tenantId, secrets, customer: customerBody }: ParamsGetOrCreateCustomer,
  customerCreateParams?: Partial<Stripe.CustomerCreateParams>
): Promise<Customer> => {
  let customer: Customer;
  try {
    customer = await customerRepository.getItem({ tenantId });
  } catch (error) {
    if (!secrets || !customerBody) {
      throw new ApiError('Missing secrets or customer body', 400);
    }
    const body = await getStripeClient({ secrets }).createStripeCustomer(
      {
        customerId: tenantId,
        fullName: `${customerBody.given_name} ${customerBody.family_name}`,
        email: customerBody.email,
      },
      customerCreateParams
    );

    customer = await customerRepository.createItem({ tenantId }, body);
  }

  return customer;
};
