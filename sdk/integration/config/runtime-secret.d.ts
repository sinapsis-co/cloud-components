import { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
export declare const sm: SecretsManagerClient;
export declare const getRuntimeSecret: <Secret extends SecretInterface = SecretInterface>(secretConfig: SecretConfig, secretArn?: string) => Promise<Secret["payload"]>;
