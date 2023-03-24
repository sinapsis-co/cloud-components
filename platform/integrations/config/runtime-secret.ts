import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { SecretConfig, SecretInterface } from '../../catalog/secret';
import { PlatformFault } from '../../error';
import { Tracing } from '../../tracing';

const _secrets = {};

export const sm: SecretsManagerClient = Tracing.captureIntegration(new SecretsManagerClient({}) as any);

export const getRuntimeSecret = async <Secret extends SecretInterface = SecretInterface>(
  secretName: SecretConfig,
  secretId?: string
): Promise<Secret['payload']> => {
  const cmd = async () => {
    if (!_secrets[secretName.name]) {
      if (!secretId) secretId = process.env[secretName.name]!;
      if (!secretId) throw new PlatformFault({ code: 'FAULT_SM_MISSING_SECRET', detail: secretId });
      const response = await sm.send(new GetSecretValueCommand({ SecretId: secretId }));
      const secret: Secret['payload'] = JSON.parse(response.SecretString!);
      _secrets[secretName.name] = secret;
    }
    return _secrets[secretName.name];
  };
  return Tracing.traceableOp('GetRuntimeSecret', 'FAULT_SM_GET_RUNTIME_SECRET', secretName.name, cmd);
};
