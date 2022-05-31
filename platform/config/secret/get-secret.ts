/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { SecretsManager } from 'aws-sdk';
import { SecretConfig, SecretInterface } from '../../catalog/secret/secret-interface';

const _secrets = {};

const sm = new SecretsManager();

export const getSecret = async <Secret extends SecretInterface = SecretInterface>(
  secretName: SecretConfig,
  secretArn = ''
): Promise<Secret['payload']> => {
  if (!_secrets[secretName.name]) {
    if (!secretArn) secretArn = process.env[secretName.name]!;
    if (!secretArn) throw new Error(`Missing env var: '${secretName}''`);

    const response = await sm.getSecretValue({ SecretId: secretArn }).promise();

    const secret: Secret['payload'] = JSON.parse(response.SecretString!);

    _secrets[secretName.name] = secret;
  }

  return _secrets[secretName.name];
};
