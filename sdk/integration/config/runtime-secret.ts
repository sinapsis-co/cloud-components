import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

import { SecretConfig, SecretInterface } from 'catalog/secret';
import { PlatformFault } from 'error';
import { Tracing, traceableFunction } from 'tracing';

const _secrets = {};

export const sm: SecretsManagerClient = Tracing.captureIntegration(new SecretsManagerClient({}) as any);

export const getRuntimeSecret = async <Secret extends SecretInterface = SecretInterface>(
  secretConfig: SecretConfig,
  secretArn?: string
): Promise<Secret['payload']> => {
  const cmd = async () => {
    if (!_secrets[secretConfig.name]) {
      if (!secretArn) secretArn = process.env[secretConfig.name]!;
      if (!secretArn) throw new PlatformFault({ code: 'FAULT_SM_MISSING_SECRET', detail: secretArn });
      const response = await sm.send(new GetSecretValueCommand({ SecretId: secretArn }));
      const secret: Secret['payload'] = JSON.parse(response.SecretString!);
      _secrets[secretConfig.name] = secret;
    }
    return _secrets[secretConfig.name];
  };

  return traceableFunction('GetRuntimeSecret', 'FAULT_SM_GET_RUNTIME_SECRET', secretConfig.name, cmd);
};
