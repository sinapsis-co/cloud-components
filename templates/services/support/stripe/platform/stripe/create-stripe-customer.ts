import { default as Stripe, default as StripeClient } from 'stripe';

export interface CreateCustomer {
  customerId: string;
  fullName: string;
  email: string;
  tenantId: string;
  userId: string;
  metadata?: Record<string, string>;
}
export const createStripeCustomer =
  (stripe: StripeClient) =>
  async (
    { fullName, email, customerId, metadata, tenantId, userId }: CreateCustomer,
    customerCreateParams?: Partial<Stripe.CustomerCreateParams>
  ): Promise<CreateCustomer & { stripeId: string }> => {
    const customerGateway = await stripe.customers.create({
      name: fullName,
      email: email,
      metadata: {
        customerId,
        tenantId,
        userId,
        ...metadata,
      },
      ...customerCreateParams,
    });
    return {
      tenantId,
      userId,
      customerId,
      fullName,
      email,
      stripeId: customerGateway.id,
    };
  };
