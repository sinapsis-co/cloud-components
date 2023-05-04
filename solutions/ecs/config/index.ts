import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'ecs-template',
  projectShortName: 'ecs',
  useRepositoryDefaultConfig: true,
  repositoryName: 'cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  defaultSlackDestinationDisabled: false,
  bootstrappingServices: ['DeployPipeline', 'DnsSubdomainHostedZone'],
  landingZones: ['sinapsis'],
  isDemoProject: true,
  subdomain: {
    webappNext: '',
    webapp: 'app',
    webappVite: 'vite-app',
    api: 'api',
    assets: 'media',
    auth: 'auth',
    backofficeAuth: 'backoffice-auth',
  },
};

export const globalEnvConfig: GlobalEnvConfig = {
  dev: {
    deployBranch: 'dev',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'ecs.sinapsis.io',
    envDomainName: 'dev.ecs.sinapsis.io',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.io',
    baseDomainName: 'ecs.sinapsis.io',
    envDomainName: 'staging.ecs.sinapsis.io',
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
