/* eslint-disable no-console */
import SSM from 'aws-sdk/clients/ssm';
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { getParameterName, getResourceName } from '../common/naming/get-resource-name';
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

export const startSPA = async <
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

    const { envName, ephemeralEnvName, serviceNameInput, envNameInput, roleName, accountMap } = await preScript(
      globalConstConfig,
      globalEnvConfig,
      globalDeployTargetConfig,
      args
    );

    console.log('>> STEP: (1/3) => LOADING CONFIGS');
    const projectName = globalConstConfig.projectName;

    const account =
      accountMap
        .split(' ')
        .find((a) => a.includes('services'))
        ?.split('=')[1] || '';
    const region = globalDeployTargetConfig[envName]['services']['region'];

    const role = await assumeRole({ account, region }, roleName);

    const parameterName = getResourceName('config', {
      projectName,
      envName,
      ephemeralEnvName,
      serviceName: serviceNameInput,
    });

    console.log('>> STEP: (2/3) => RENDERING ENV');

    const ssm = new SSM(role);
    const deployConfig = await ssm.getParameter({ Name: parameterName }).promise();

    if (!deployConfig.Parameter?.Value) throw new Error('Invalid Config');
    const { baseDir } = JSON.parse(deployConfig.Parameter?.Value);

    const baseSecretName = getParameterName('secret', {
      projectName,
      envName,
      ephemeralEnvName,
      serviceName: serviceNameInput,
    });
    const { Parameters } = await ssm.getParametersByPath({ Path: baseSecretName, Recursive: true }).promise();
    if (!Parameters) throw new Error('Invalid secret');
    const secret: Record<string, any> = Parameters?.reduce(
      (pre, curr) => ({ ...pre, ...JSON.parse(curr.Value as string) }),
      {}
    );

    const envFile = Object.keys(secret)
      .map((key) => `${key}=${secret[key]}\n`)
      .join('');

    if (Parameters && Parameters?.length > 0) {
      writeFileSync(`${process.cwd()}/${baseDir}/.env.${envNameInput}`, envFile);
      console.log(`>> NEW ENV FILE GENERATED AT => ${process.cwd()}/${baseDir}/.env.${envNameInput}`);
    }

    console.log('>> STEP: (3/3) => STARTING');

    const command = `yarn ${args[5] === 'vite' ? 'dev' : 'start'} ${envNameInput}`;

    execSync(command, { stdio: 'inherit', cwd: `${process.cwd()}/${baseDir}` });
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};
