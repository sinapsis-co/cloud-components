import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { UserClaims } from 'services/business/identity/entities/user-cognito';
import { StripeConfig, getStripeClient } from 'services/support/stripe/platform';
import Stripe from 'stripe';
import { Customer } from '../entities/customer';
import { customerRepository } from '../repository';

interface ParamsGetOrCreateCustomer {
  tenantId: string;
  sub: string;
  secrets?: StripeConfig['secrets'];
  customer?: Omit<UserClaims, 'company' | 'role'>;
}
export const getOrCreateCustomer = async (
  { tenantId, secrets, customer: customerBody, sub }: ParamsGetOrCreateCustomer,
  customerCreateParams?: Partial<Stripe.CustomerCreateParams>
): Promise<Customer> => {
  let customer: Customer;
  try {
    customer = await customerRepository.getItem({ tenantId, userId: sub });
  } catch (error) {
    if (!secrets || !customerBody) {
      throw new ApiError('Missing secrets or customer body', 400);
    }
    const body = await getStripeClient({ secrets }).createStripeCustomer(
      {
        customerId: tenantId,
        tenantId: tenantId,
        userId: sub,
        fullName: `${customerBody.given_name} ${customerBody.family_name}`,
        email: customerBody.email,
      },
      customerCreateParams
    );

    customer = await customerRepository.createItem({ tenantId, userId: sub }, body);
  }

  return customer;
};
