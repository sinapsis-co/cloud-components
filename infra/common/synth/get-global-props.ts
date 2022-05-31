import { Construct } from 'constructs';
import { SynthError } from './synth-error';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTarget,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseGlobalProps,
} from './props-types';

export const getGlobalProps = <
  GlobalConstConfig extends BaseGlobalConstConfig,
  AllowedEnvName extends BaseEnvName,
  GlobalEnv extends BaseGlobalEnv,
  GlobalDeployTarget extends BaseGlobalDeployTarget
>(
  app: Construct,
  globalConstConfig: GlobalConstConfig,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnvName, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnvName, BaseDeployTargetName>
): BaseGlobalProps<GlobalConstConfig, GlobalEnv, GlobalDeployTarget> => {
  const envInput: string = app.node.tryGetContext('env');

  const envName: BaseEnvName = (envInput.includes('-') ? envInput.split('-')[0] : envInput) as BaseEnvName;
  const ephemeralEnvName: string = envInput.includes('-') ? envInput.split('-')[1] : '';

  const currentGlobalServiceEnv = globalEnvConfig[envName];
  if (!currentGlobalServiceEnv) throw new Error(`Invalid env name: '${envName}'`);

  const currentGlobalDeployTarget = globalDeployTargetConfig[envName];
  Object.keys(currentGlobalDeployTarget).forEach((a) => {
    currentGlobalDeployTarget[a]['account'] = app.node.tryGetContext(a);
    if (!currentGlobalDeployTarget[a]['account']) throw new SynthError(`Missing account mapping of ${a}`);
  });

  return {
    envName,
    ephemeralEnvName,
    regionName: currentGlobalDeployTarget['services'].region,
    deployTarget: currentGlobalDeployTarget,
    ...globalConstConfig,
    ...currentGlobalServiceEnv,
  };
};
