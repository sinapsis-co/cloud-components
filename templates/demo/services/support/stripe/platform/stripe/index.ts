import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import StripeClient from 'stripe';
import { ParamsAttachPaymentMethod, attachStripePaymentMethod } from './attach-stripe-payment-method';
import { CreateCustomer, createStripeCustomer } from './create-stripe-customer';
import { getStripe } from './get-stripe-client';

export interface StripeRepo
  extends Omit<
    StripeClient,
    | 'setTimeout'
    | 'setMaxNetworkRetries'
    | 'setTelemetryEnabled'
    | 'setHttpAgent'
    | 'setAppInfo'
    | 'on'
    | 'once'
    | 'off'
    | 'setProtocol'
    | 'setHost'
    | 'setPort'
    | 'setApiVersion'
    | 'setApiKey'
  > {
  retrievePaymentMethod: (paymentMethodId: string) => Promise<StripeClient.Response<StripeClient.PaymentMethod>>;
  createStripeCustomer: (
    customer: CreateCustomer,
    customerCreateParams?: Partial<StripeClient.CustomerCreateParams>
  ) => Promise<CreateCustomer & { stripeId: string }>;
  constructEvent: (body: string, signature: string) => StripeClient.Event;
  attachStripePaymentMethod: (params: ParamsAttachPaymentMethod) => Promise<void>;
}
export interface StripeConfig {
  stripe?: StripeClient;
  secrets?: {
    API_KEY: string;
    WEBHOOK_SECRET: string;
  };
}

const getStripeClient = (config: StripeConfig): StripeRepo => {
  if (!config.stripe && !config.secrets) {
    throw new ApiError('Stripe config is not defined');
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const stripe = config?.stripe || getStripe(config?.secrets?.API_KEY!);

  const constructEvent = (body: string, signature: string): StripeClient.Event => {
    if (!config.secrets?.WEBHOOK_SECRET) {
      throw new ApiError('Stripe webhook secret is not defined');
    }
    return stripe.webhooks.constructEvent(body, signature, config.secrets?.WEBHOOK_SECRET);
  };

  const retrievePaymentMethod = async (paymentMethodId: string) =>
    await stripe.paymentMethods.retrieve(paymentMethodId);

  return {
    ...stripe,
    createStripeCustomer: createStripeCustomer(stripe),
    constructEvent,
    retrievePaymentMethod,
    attachStripePaymentMethod: attachStripePaymentMethod(stripe),
  };
};

export { StripeClient as Stripe, getStripe, getStripeClient };
