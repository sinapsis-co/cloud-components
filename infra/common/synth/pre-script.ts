/* eslint-disable no-console */

import { getServiceName } from '../naming/get-service-name';
import { parseContext } from './parse-context';
import { accountMapping } from './account-mapping';
import {
  BaseEnvName,
  BaseGlobalEnv,
  BaseGlobalConstConfig,
  BaseGlobalEnvConfig,
  BaseGlobalDeployTargetConfig,
  BaseDeployTargetName,
} from './props-types';

export const preScript = async <
  GlobalConst,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
>(
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  args: string[]
): Promise<{
  serviceNameInput: string;
  envNameInput: string;
  ephemeralEnvName: string;
  envName: string;
  roleName: string;
  outputFile: string;
  context: string;
  serviceName: string;
  bootstrappingServices: string;
  accountMap: string;
}> => {
  try {
    const envNameInput = args[3];
    const serviceNameInput = args[4];
    const stringContext = args[5];

    const envName = envNameInput.includes('-') ? envNameInput.split('-')[0] : envNameInput;
    const ephemeralEnvName = envNameInput.includes('-') ? envNameInput.split('-')[1] : '';
    const props = { ...globalConstConfig, ...globalEnvConfig[envName], envName, ephemeralEnvName };

    const accountMap = parseContext(
      (
        await Promise.all(
          Object.keys(globalDeployTargetConfig[envName]).map(async (a) => {
            const account = globalDeployTargetConfig[envName][a]['account'];
            if (parseInt(account)) return `${a}=${account}`;
            const [env, ...project] = account.split('-').reverse();
            const composed = project.reverse();
            return `${a}=${await accountMapping(composed.join('-'), env)}`;
          })
        )
      ).join('&')
    );
    const outputFile = `cdk.out/output/${envName}.json`;
    const roleName = globalEnvConfig[envName].roleName;
    const serviceName = !serviceNameInput
      ? '--all'
      : `${serviceNameInput.split('&').reduce((acc, s) => {
          acc += `${getServiceName(s, props)} `;
          return acc;
        }, '')} --exclusively`;
    const context = parseContext(stringContext);

    const bootstrappingServices = globalConstConfig.bootstrappingServices?.join('&') || '';

    return {
      serviceNameInput,
      envName,
      envNameInput,
      ephemeralEnvName,
      roleName,
      outputFile,
      context,
      serviceName,
      bootstrappingServices,
      accountMap,
    };
  } catch (error: any) {
    console.log(`PreScript Error: ${error.message}`);
    process.exit(1);
  }
};
