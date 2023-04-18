import { BaseDeployTargetName, BaseGlobalProps, DeployConfig } from '../synth/props-types';

export const getDeployConfig = (
  deployTarget: BaseGlobalProps,
  deployTargetName: BaseDeployTargetName = 'services'
): { env: DeployConfig } => {
  return { env: deployTarget.deployTarget[deployTargetName] };
};
