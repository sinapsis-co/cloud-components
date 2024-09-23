/* eslint-disable no-console */
import {
  AdminConfirmSignUpCommand,
  CognitoIdentityProviderClient,
  SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { getServiceName } from '@sinapsis-cloud-components/core/common/naming/get-service-name';
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

    console.log('>> STEP: (1/3) => LOADING CONFIGS');
    const name = args[4]; // givenName@familyName
    const email = args[5]; 
    const password = args[6]
    const tenant = args[7]; // companyName@something

    const { envNameInput, roleName, accountMap, envName } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    const identityServiceKey = getServiceName('Identity', {
      envName: envNameInput,
      projectName: globalConstConfig.projectName,
    });
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

    const [givenName, familyName] = name.split('@');

    const att = [
      { Name: 'email', Value: email },
      { Name: 'given_name', Value: givenName },
      { Name: 'family_name', Value: familyName },
    ];
    if (tenant) {
      const [name, value] = tenant.split('@');
      att.push({ Name: `custom:${name}`, Value: value });
    }

    console.log('>> STEP: (2/3) => SIGN UP');
    await cognito.send(
      new SignUpCommand({
        ClientId: clientId,
        Username: email,
        Password: password,
        UserAttributes: att,
      })
    );
    console.log('>> STEP: (3/3) => CONFIRM SIGN UP');
    await cognito.send(new AdminConfirmSignUpCommand({ UserPoolId: userPoolId, Username: email }));
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
