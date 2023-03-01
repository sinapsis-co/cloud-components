import { SecretInterface, SecretConfig } from '@sinapsis-co/cc-platform-v2/catalog/secret';

export type Secret = SecretInterface<{
  name: 'algolia';
  payload: {
    ALGOLIA_API_KEY: string;
    ALGOLIA_APPLICATION_ID: string;
  };
}>;

export const secretConfig: SecretConfig<Secret> = {
  name: 'algolia',
};
