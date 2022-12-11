import { default as Stripe, default as StripeClient } from 'stripe';

export interface CreateCustomer {
  customerId: string;
  fullName: string;
  email: string;
  metadata?: Record<string, string>;
}
export const createStripeCustomer =
  (stripe: StripeClient) =>
  async (
    { fullName, email, customerId, metadata }: CreateCustomer,
    customerCreateParams?: Partial<Stripe.CustomerCreateParams>
  ): Promise<CreateCustomer & { stripeId: string }> => {
    const stripeCustomer = await stripe.customers.create({
      name: fullName,
      email: email,
      metadata: {
        customerId,
        ...metadata,
      },
      ...customerCreateParams,
    });
    return {
      customerId,
      fullName,
      email,
      stripeId: stripeCustomer.id,
    };
  };
