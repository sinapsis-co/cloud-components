/* eslint-disable @typescript-eslint/ban-types */
export type BaseRegionName = 'us-east-1' | string;

export type BaseEnvName = 'dev' | 'test' | 'staging' | 'prod' | string;

export type BaseDeployTargetName = 'services' | string;

export interface DeployConfig {
  region: BaseRegionName;
  account: string;
}

// Global Config

export type BaseGlobalConstConfig<ExtendedConst = {}> = {
  projectName: string;
  projectShortName: string;
  repositoryName: string;
  landingZones: string[];
  pipelineNotificationSlackChannel?: string;
  isDemoProject?: boolean;
  bootstrappingServices?: string[];
  isSingleProjectAccount?: boolean;
} & ExtendedConst;

export type BaseGlobalEnv<ExtendedEnv = {}> = {
  roleName: string;
  deployBranch: string;
  hostedZoneName: string;
  envDomainName: string;
  emailSender: string;
} & ExtendedEnv;

export type BaseGlobalEnvConfig<
  AllowedEnv extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv
> = Record<AllowedEnv, GlobalEnv>;

export type BaseGlobalDeployTarget<DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName> = Record<
  DeployTargetName,
  DeployConfig
>;

export type BaseGlobalDeployTargetConfig<
  AllowedEnv extends BaseEnvName = BaseEnvName,
  DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName,
  GlobalDeployTarget extends BaseGlobalDeployTarget<DeployTargetName> = BaseGlobalDeployTarget<DeployTargetName>
> = Record<AllowedEnv, GlobalDeployTarget>;

// Service Config

export type BaseServiceDependencies<ServiceDependencies = {}> = {} & ServiceDependencies;

export type BaseServiceConstConfig<ExtendedConst = {}> = {} & ExtendedConst;

export type BaseServiceEnv<ExtendedEnv = {}> = {} & ExtendedEnv;

export type BaseServiceEnvConfig<
  AllowedEnv extends BaseEnvName = BaseEnvName,
  ServiceEnv extends BaseServiceEnv = BaseServiceEnv
> = Record<AllowedEnv, ServiceEnv>;

// Composition Props

export type BaseGlobalProps<
  GlobalConstConfig extends BaseGlobalConstConfig = BaseGlobalConstConfig,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  GlobalDeployTarget extends BaseGlobalDeployTarget = BaseGlobalDeployTarget
> = {
  envName: BaseEnvName;
  regionName: BaseRegionName;
  ephemeralEnvName?: string;
  deployTarget: GlobalDeployTarget;
} & GlobalConstConfig &
  GlobalEnv;

export type BaseServiceProps<
  GlobalProps extends BaseGlobalProps = BaseGlobalProps,
  ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies
> = {
  serviceName: string;
} & GlobalProps &
  ServiceDependencies;
