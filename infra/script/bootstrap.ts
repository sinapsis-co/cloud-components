/* eslint-disable no-console */
import { execSync } from 'child_process';
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

    const { envNameInput, roleName, outputFile, serviceName, context, accountMap, bootstrappingServices } =
      await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);
    const command = `npx cdk bootstrap \
      --require-approval='never' \
      --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
      --context env=${envNameInput} \
      --context assume-role-credentials:writeIamRoleName=${roleName} \
      --context assume-role-credentials:readIamRoleName=${roleName} \
      --outputs-file ${outputFile} \
      ${accountMap} ${context} ${serviceName}`;

    execSync(command, { stdio: 'inherit', env: process.env });

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
