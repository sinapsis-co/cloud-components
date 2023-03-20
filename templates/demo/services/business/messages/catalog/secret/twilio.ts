import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-platform/catalog/secret';

export type Secret = SecretInterface<{
  name: 'twilio';
  payload: {
    AUTH_TOKEN: string;
    ACCOUNT_SID: string;
    TWILIO_API_KEY: string;
    TWILIO_API_SECRET: string;
    SERVICE_CONVERSATIONS_SID?: string;
  };
}>;

export const secretConfig: SecretConfig<Secret> = {
  name: 'twilio',
};
