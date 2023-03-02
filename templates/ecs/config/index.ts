import { GlobalConstConfig, GlobalDeployTargetConfig, GlobalEnvConfig } from './config-type';

export const globalConstConfig: GlobalConstConfig = {
  projectName: 'ecs-template',
  projectShortName: 'ecs',
  useRepositoryDefaultConfig: true,
  repositoryName: 'v2.cloud-components',
  pipelineNotificationSlackChannel: 'cloud-components',
  defaultSlackDestinationDisabled: false,
  bootstrappingServices: ['DeployPipeline', 'DnsSubdomainHostedZone'],
  isDemoProject: true,
  subdomain: {
    webappNext: '',
    webapp: 'app',
    webappVite: 'vite-app',
    api: 'api',
    media: 'media',
    auth: 'auth',
    backofficeAuth: 'backoffice-auth',
  },
};

export const globalEnvConfig: GlobalEnvConfig = {
  dev: {
    deployBranch: 'dev',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.co',
    baseDomainName: 'ecs-demo.sinapsis.co',
    envDomainName: 'dev.ecs-demo.sinapsis.co',
    emailSender: 'no-reply',
    wafEnabled: false,
    clientNotificationSlack: false,
  },
  staging: {
    deployBranch: 'staging',
    roleName: 'SinapsisDevRole',
    hostedZoneName: 'sinapsis.co',
    baseDomainName: 'ecs-demo.sinapsis.co',
    envDomainName: 'staging.ecs-demo.sinapsis.co',
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
    deploy: {
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
    deploy: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
    dnsShared: {
      region: 'us-east-1',
      account: 'sinapsis-shared',
    },
  },
};