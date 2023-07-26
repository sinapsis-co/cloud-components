import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'landingzone',
  projectShortName: 'lz',
  repositoryName: 'cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  bootstrappingServices: ['DnsSubdomainHostedZone'],
  landingZones: ['sinapsis'],
  isDemoProject: true,
  isSingleProjectAccount: true,
  subdomain: {
    ssrLanding: '',
    spaWebapp: 'app',
    api: 'api',
    assets: 'media',
    auth: 'auth',
    graphql: 'graphql',
  },
};

export const globalEnvConfig: GlobalEnvConfig = {
  dev: {
    deployBranch: 'dev',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'landing.sinapsis.io',
    envDomainName: 'dev.landing.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'base.sinapsis.io',
    envDomainName: 'staging.base.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
  },
};

export const globalDeployTargetConfig: GlobalDeployTargetConfig = {
  dev: {
    services: {
      region: 'us-east-1',
      account: 'cc-demos',
    },
    deployPipeline: {
      region: 'us-east-1',
      account: 'sinapsis-worker',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-worker',
    },
  },
  staging: {
    services: {
      region: 'us-east-1',
      account: 'v3-dev',
    },
    deployPipeline: {
      region: 'us-east-1',
      account: 'sinapsis-worker',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-worker',
    },
  },
};
