/* eslint-disable no-console */

import { getServiceName } from '../naming/get-service-name';
import { accountMapping } from './account-mapping';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseGlobalProps,
} from './props-types';
import { SynthError } from './synth-error';

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
  isSingleProjectAccount?: boolean;
  servicesNamesInput: string[];
  envNameInput: string;
  ephemeralEnvName: string;
  envName: string;
  roleName: string;
  outputFile: string;
  servicesNames: string;
  bootstrappingServices: string;
  accountMap: string;
  landingZones: string[];
}> => {
  try {
    const envNameInput: string = args[3];
    const servicesNamesInput: string[] = args.slice(4);

    const envName = envNameInput.includes('-') ? envNameInput.split('-')[0] : envNameInput;
    const ephemeralEnvName = envNameInput.includes('-') ? envNameInput.split('-')[1] : '';
    const props: BaseGlobalProps = { ...globalConstConfig, ...globalEnvConfig[envName], envName, ephemeralEnvName };

    if (!globalDeployTargetConfig[envName]) throw new SynthError('Invalid Env');

    const landingZones = await Promise.all(globalConstConfig.landingZones.map((l) => accountMapping(l, 'landingzone')));

    const accountMap = parseContext(
      (
        await Promise.all(
          Object.keys(globalDeployTargetConfig[envName]).map(async (a) => {
            const account: string = globalDeployTargetConfig[envName][a]['account'];
            if (!account.includes('-')) return `${a}=${account}`;
            const [env, ...project] = account.split('-').reverse();
            const composed = project.reverse();
            return `${a}=${await accountMapping(composed.join('-'), env)}`;
          })
        )
      ).join('&')
    );
    const outputFile = `cdk.out/output/${envNameInput}.json`;
    const roleName = globalEnvConfig[envName].roleName;
    const servicesNames = parseServicesNames(servicesNamesInput, props);

    const bootstrappingServices = globalConstConfig.bootstrappingServices
      ? parseServicesNames(globalConstConfig.bootstrappingServices, props)
      : '';

    return {
      isSingleProjectAccount: props.isSingleProjectAccount,
      servicesNamesInput,
      envName,
      envNameInput,
      ephemeralEnvName,
      roleName,
      outputFile,
      servicesNames,
      bootstrappingServices,
      accountMap,
      landingZones,
    };
  } catch (error: any) {
    console.log(`PreScript Error: ${error.message}`);
    process.exit(1);
  }
};

const parseServicesNames = (servicesNamesInput: string[], props: BaseGlobalProps): string => {
  return servicesNamesInput.length < 1
    ? '--all'
    : `${servicesNamesInput.reduce((acc, s) => {
        acc += `${getServiceName(s, props)} `;
        return acc;
      }, '')}--exclusively`;
};

const parseContext = (stringContext: string): string => {
  if (!stringContext) return '';
  return stringContext
    .split('&')
    .map((c) => `--context ${c} `)
    .join('');
};
