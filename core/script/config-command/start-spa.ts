/* eslint-disable no-console */
import { GetParameterCommand, SSMClient } from '@aws-sdk/client-ssm';
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { ConfigCommand } from '..';
import { getResourceName } from '../../common/naming/get-resource-name';
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

export const startSPA: ConfigCommand = async <
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
    console.log('<< Start SPA Script >>');

    const yarnCommand = args[5] || 'start';

    const {
      envName,
      ephemeralEnvName,
      servicesNamesInput,
      envNameInput,
      roleName,
      accountMap,
      isSingleProjectAccount,
    } = await preScript(globalConstConfig, globalEnvConfig, globalDeployTargetConfig, args);

    console.log('>> STEP: (1/3) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    const role = await assumeRole({ account, region }, roleName);

    console.log('>> STEP: (2/3) => RENDERING ENV');
    const getParamName = (name: string) =>
      getResourceName(name, {
        projectName,
        envName,
        ephemeralEnvName,
        isSingleProjectAccount,
        serviceName: servicesNamesInput[0],
      });

    const ssm = new SSMClient(role);

    const deployConfig = await ssm.send(new GetParameterCommand({ Name: getParamName('config') }));

    if (!deployConfig.Parameter?.Value) throw new Error('Invalid Config');
    const { baseDir } = JSON.parse(deployConfig.Parameter?.Value);

    const calculatedEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-calculated') }));
    if (!calculatedEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const manualEnv = await ssm.send(new GetParameterCommand({ Name: getParamName('env-manual') }));
    if (!manualEnv.Parameter?.Value) throw new Error('Invalid CalculatedEnv');

    const envFile = `${calculatedEnv.Parameter?.Value}\n${manualEnv.Parameter?.Value}`;

    writeFileSync(`${process.cwd()}/${baseDir}/.env.${envNameInput}`, envFile);

    console.log('>> STEP: (3/3) => STARTING');

    const command = `yarn && yarn ${yarnCommand} ${envNameInput}`;

    execSync(command, { stdio: 'inherit', cwd: `${process.cwd()}/${baseDir}` });
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
