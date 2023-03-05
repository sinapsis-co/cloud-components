import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'baseTemplate',
  projectShortName: 'base',
  useRepositoryDefaultConfig: true,
  repositoryName: 'v2.cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  defaultSlackDestinationDisabled: false,
  bootstrappingServices: ['DeployPipeline', 'DnsSubdomainHostedZone'],
  isDemoProject: true,
  subdomain: {
    ssrLanding: '',
    spaWebapp: 'app',
    api: 'api',
    assets: 'media',
    auth: 'auth',
  },
};

export const globalEnvConfig: GlobalEnvConfig = {
  dev: {
    deployBranch: 'dev',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.co',
    baseDomainName: 'base.sinapsis.co',
    envDomainName: 'dev.base.sinapsis.co',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.co',
    baseDomainName: 'base.sinapsis.co',
    envDomainName: 'staging.base.sinapsis.co',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
};

export const globalDeployTargetConfig: GlobalDeployTargetConfig = {
  dev: {
    services: {
      region: 'us-east-1',
      account: 'demos-dev',
    },
    deployPipeline: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
  },
  staging: {
    services: {
      region: 'us-east-1',
      account: 'demos-dev',
    },
    deployPipeline: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
  },
};
