import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import {
  BaseGlobalConstConfig,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseGlobalProps,
} from '@sinapsis-co/cc-core/common/synth/props-types';

export type Subdomain = {
  webappNext: string;
  webapp: string;
  webappVite: string;
  api: string;
  assets: string;
  auth: string;
  backofficeAuth: string;
};

export type GlobalConstConfig = BaseGlobalConstConfig<{
  subdomain: Subdomain;
}>;

export type AllowedEnvName = 'dev' | 'staging';

export type DeployTargetName = 'services' | 'dnsShared' | 'deployPipeline';

export type GlobalEnv = BaseGlobalEnv<{
  wafEnabled: boolean;
  emailSender: string;
  subdomain?: Subdomain;
}>;

export type GlobalDeployTargetConfig = BaseGlobalDeployTargetConfig<AllowedEnvName, DeployTargetName>;

export type GlobalEnvConfig = BaseGlobalEnvConfig<AllowedEnvName, GlobalEnv>;

export type GlobalProps = BaseGlobalProps<GlobalConstConfig, GlobalEnv>;

export type GlobalCoordinator = Coordinator<GlobalConstConfig, AllowedEnvName, GlobalEnv>;
