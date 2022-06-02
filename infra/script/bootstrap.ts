/* eslint-disable no-console */
import { execSync } from 'child_process';
import { assumeRole } from '../common/synth/assume-role';
import { preScript } from '../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../common/synth/props-types';
import { deploy } from './deploy';

export const bootstrap = async <
  GlobalConst,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
>(
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  args: string[]
): Promise<void> => {
  try {
    console.log('<< Bootstrap Started >>');

    const { envName, envNameInput, roleName, outputFile, serviceName, context, accountMap, bootstrappingServices } =
      await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    const accountArr = accountMap.split(' ');

    const serviceAccount: string = accountArr.find((a) => a.includes('services'))?.split('=')[1] || '';
    const rootAccount: string = accountArr.find((a) => a.includes('deploy'))?.split('=')[1] || '';

    const region = globalDeployTargetConfig[envName]['services']['region'];
    const role = await assumeRole({ account: serviceAccount, region }, roleName);

    const command = `npx cdk bootstrap ${serviceAccount}/${region} \
      --require-approval='never' \
      --trust ${rootAccount} \
      --require-approval='never' \
      --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
      --context env=${envNameInput} \
      --context assume-role-credentials:writeIamRoleName=${roleName} \
      --context assume-role-credentials:readIamRoleName=${roleName} \
      --outputs-file ${outputFile} \
      ${accountMap} ${context} ${serviceName}`;

    execSync(command, {
      stdio: 'inherit',
      env: {
        ...process.env,
        AWS_ACCESS_KEY_ID: role.credentials.accessKeyId,
        AWS_SECRET_ACCESS_KEY: role.credentials.secretAccessKey,
        AWS_SESSION_TOKEN: role.credentials.sessionToken,
        AWS_REGION: role.region,
      },
    });

    if (bootstrappingServices)
      deploy(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, [
        '',
        '',
        '',
        envNameInput,
        bootstrappingServices,
        'isBootstrapping=true',
      ]);
  } catch (error) {
    process.exit(1);
  }
};
