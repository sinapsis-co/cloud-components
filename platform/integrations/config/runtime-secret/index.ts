import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';
import { SecretConfig, SecretInterface } from '../../../catalog/secret';
import { HandledFault } from '../../../util/handled-exception';

const _secrets = {};

const sm = new SecretsManagerClient({});

export const getRuntimeSecret = async <Secret extends SecretInterface = SecretInterface>(
  secretName: SecretConfig,
  secretId?: string
): Promise<Secret['payload']> => {
  if (!_secrets[secretName.name]) {
    if (!secretId) secretId = process.env[secretName.name]!;
    if (!secretId) throw new HandledFault({ code: 'FAULT_SM_MISSING_SECRET', detail: secretId });

    const response = await sm.send(new GetSecretValueCommand({ SecretId: secretId }));

    const secret: Secret['payload'] = JSON.parse(response.SecretString!);

    _secrets[secretName.name] = secret;
  }

  return _secrets[secretName.name];
};
