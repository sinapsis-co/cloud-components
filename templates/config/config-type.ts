import {
  BaseGlobalProps,
  BaseGlobalConstConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseGlobalDeployTargetConfig,
} from '@sinapsis-co/cc-infra-v2/common/synth/props-types';

export type Subdomain = {
  landing: string;
  webapp: string;
  api: string;
  media: string;
  auth: string;
};

export type GlobalConstConfig = BaseGlobalConstConfig<{
  subdomain: Subdomain;
}>;

export type AllowedEnvName = 'dev' | 'staging';

export type DeployTargetName = 'services' | 'dnsShared' | 'deploy';

export type GlobalEnv = BaseGlobalEnv<{
  wafEnabled: boolean;
  emailSender: string;
  subdomain?: Subdomain;
}>;

export type GlobalDeployTargetConfig = BaseGlobalDeployTargetConfig<AllowedEnvName, DeployTargetName>;

export type GlobalEnvConfig = BaseGlobalEnvConfig<AllowedEnvName, GlobalEnv>;

export type GlobalProps = BaseGlobalProps<GlobalConstConfig, GlobalEnv>;
