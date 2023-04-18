/* eslint-disable no-console */
import { execSync } from 'child_process';
import { ConfigCommand } from '..';
import { preScript } from '../../common/synth/pre-script';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../../common/synth/props-types';

export const deploy: ConfigCommand = async <
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
    console.log('<< Deploy Started >>');

    const { envNameInput, roleName, outputFile, servicesNames, accountMap } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    const command = `npx cdk deploy \
    --require-approval='never' \
    --cloudformation-execution-policies=arn:aws:iam::aws:policy/AdministratorAccess \
    --context env=${envNameInput} \
    --context assume-role-credentials:writeIamRoleName=${roleName} \
    --context assume-role-credentials:readIamRoleName=${roleName} \
    --outputs-file ${outputFile} \
    ${accountMap} ${servicesNames}`;

    execSync(command, { stdio: 'inherit', env: process.env });
  } catch (error: any) {
    process.exit(1);
  }
};
