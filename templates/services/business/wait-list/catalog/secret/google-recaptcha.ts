import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-platform-v2/catalog/secret';

export type Secret = SecretInterface<{
  name: 'googleRecaptcha';
  payload: {
    API_SECRET: string;
  };
}>;

export const secretConfig: SecretConfig<Secret> = {
  name: 'googleRecaptcha',
};
