/* eslint-disable no-console */
import {
  AdminConfirmSignUpCommand,
  CognitoIdentityProviderClient,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { assumeRole } from '../../common/synth/assume-role';
import { preScript } from '../../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../../common/synth/props-types';

export const createUser = async <
  GlobalConst,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
>(
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  output: Record<string, Record<string, string>>,
  args: string[]
): Promise<void> => {
  try {
    console.log('<< Create Cognito User >>');

    const name = args[4];
    const password = args[5];
    const postfix = args[6];
    const tenant = args[7];

    const email = `${name}+${postfix}@sinapsis.co`;

    const { envNameInput, roleName, accountMap, envName } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    const identityServiceKey = `${globalConstConfig.projectName}-${envNameInput}-Identity`
      .split('-')
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join('-');
    if (!identityServiceKey)
      throw new Error('Missing Service. Please deploy it in order to run this command: yarn deploy [env] Identity');
    const clientIdKey = Object.keys(output[identityServiceKey]).find((w) =>
      w.startsWith('CognitoAuthPoolPrefabUserPoolClient')
    );
    const userPoolIdKey = Object.keys(output[identityServiceKey]).find((w) =>
      w.startsWith('CognitoAuthPoolPrefabUserPoolId')
    );
    if (!clientIdKey || !userPoolIdKey) throw new Error('Missing output');

    const clientId = output[identityServiceKey][clientIdKey];
    const userPoolId = output[identityServiceKey][userPoolIdKey];

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    const role = await assumeRole({ account, region }, roleName);

    const cognito = new CognitoIdentityProviderClient(role);

    const att = [
      { Name: 'email', Value: email },
      { Name: 'given_name', Value: name },
      { Name: 'family_name', Value: name },
    ];
    if (tenant) att.push({ Name: 'custom:companyName', Value: tenant });

    await cognito.send(
      new SignUpCommand({
        ClientId: clientId,
        Username: email,
        Password: password,
        UserAttributes: att,
      })
    );

    await cognito.send(new AdminConfirmSignUpCommand({ UserPoolId: userPoolId, Username: email }));
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
