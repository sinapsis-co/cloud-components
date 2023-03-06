import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
} from '../common/synth/props-types';
import { bootstrap } from './config-command/bootstrap';
import { deploy } from './config-command/deploy';
import { deploySPA } from './config-command/deploy-spa';
import { deploySSR } from './config-command/deploy-ssr';
import { destroy } from './config-command/destroy';
import { startSPA } from './config-command/start-spa';
import { startSSR } from './config-command/start-ssr';
import { synth } from './config-command/synth';
import { createUser } from './output-command/create-user';
import { genPostmanEnv } from './output-command/gen-postman-env';

export type ConfigCommand<
  GlobalConst = any,
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
> = (
  globalConstConfig: BaseGlobalConstConfig<GlobalConst>,
  globalEnvConfig: BaseGlobalEnvConfig<AllowedEnv, GlobalEnv>,
  globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnv, DeployTargetName>,
  args: string[]
) => Promise<void>;

export type SignatureType = 'config' | 'output';

export const getCommandSignature = (command: string): SignatureType => {
  const ops: Record<string, SignatureType> = {
    deploy: 'config',
    synth: 'config',
    bootstrap: 'config',
    destroy: 'config',
    'deploy-spa': 'config',
    'start-spa': 'config',
    'deploy-ssr': 'config',
    'start-ssr': 'config',
    'create-user': 'output',
    'gen-postman-env': 'output',
  };
  if (!ops[command]) throw new Error('Missing command');
  return ops[command];
};

export const executeConfigCommand = (command: string): any => {
  const ops = {
    deploy: deploy,
    synth: synth,
    bootstrap: bootstrap,
    destroy: destroy,
    'deploy-spa': deploySPA,
    'start-spa': startSPA,
    'deploy-ssr': deploySSR,
    'start-ssr': startSSR,
  };
  if (!ops[command]) throw new Error('Missing command');
  return ops[command];
};

export const executeOutputCommand = (command: string): any => {
  const ops = {
    'create-user': createUser,
    'gen-postman-env': genPostmanEnv,
  };
  if (!ops[command]) throw new Error('Missing command');
  return ops[command];
};
