import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'v3base',
  projectShortName: 'v3base',
  useRepositoryDefaultConfig: true,
  repositoryName: 'cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  defaultSlackDestinationDisabled: false,
  bootstrappingServices: ['DeployPipeline', 'DnsSubdomainHostedZone'],
  landingZones: ['sinapsis'],
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
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'v3base.sinapsis.io',
    envDomainName: 'dev.v3base.sinapsis.io',
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
      account: 'sinapsis-noprod',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-noprod',
    },
  },
  staging: {
    services: {
      region: 'us-east-1',
      account: 'demos-dev',
    },
    deployPipeline: {
      region: 'us-east-1',
      account: 'sinapsis-noprod',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-noprod',
    },
  },
};
