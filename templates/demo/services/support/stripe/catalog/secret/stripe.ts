import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-platform/catalog/secret';

export type Secret = SecretInterface<{
  name: 'stripeSecret';
  payload: {
    API_KEY: string;
    WEBHOOK_SECRET: string;
    WEBHOOK_SECRET_CONNECT?: string;
  };
}>;

export const secretConfig: SecretConfig<Secret> = {
  name: 'stripeSecret',
};
