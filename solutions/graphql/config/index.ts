import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'appsync',
  projectShortName: 'appsync',
  useRepositoryDefaultConfig: true,
  repositoryName: 'cloud-components',

  pipelineNotificationSlackChannel: 'cloud-components',
  defaultSlackDestinationDisabled: false,
  bootstrappingServices: ['DnsSubdomainHostedZone'],
  landingZones: ['sinapsis'],
  isDemoProject: true,
  subdomain: {
    ssrLanding: '',
    spaWebapp: 'app',
    api: 'api',
    graphql: 'graphql',
    assets: 'media',
    auth: 'auth',
  },
};

export const globalEnvConfig: GlobalEnvConfig = {
  dev: {
    deployBranch: 'dev',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'appsync.sinapsis.io',
    envDomainName: 'dev.appsync.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'appsync.sinapsis.io',
    envDomainName: 'staging.appsync.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
};

export const globalDeployTargetConfig: GlobalDeployTargetConfig = {
  dev: {
    services: {
      region: 'us-east-1',
      account: 'v3-dev',
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
      account: 'v3-dev',
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