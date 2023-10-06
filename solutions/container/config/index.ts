import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'container-template',
  projectShortName: 'container',
  repositoryName: 'cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  bootstrappingServices: ['DeployPipeline', 'DnsSubdomainHostedZone'],
  landingZones: ['sinapsis'],
  isDemoProject: true,
  isSingleProjectAccount: false,
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
    baseDomainName: 'container.sinapsis.io',
    envDomainName: 'dev.container.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'ecs.sinapsis.io',
    envDomainName: 'staging.ecs.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
  },
};

export const globalDeployTargetConfig: GlobalDeployTargetConfig = {
  dev: {
    services: {
      region: 'us-east-1',
      account: 'cc-dev',
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
