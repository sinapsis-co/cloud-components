/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-org';
import { Assets } from '@sinapsis-co/cc-services/support/assets';
import { DeployPipeline } from '@sinapsis-co/cc-services/support/deploy-pipeline';
import { DnsDomainRef } from '@sinapsis-co/cc-services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from '@sinapsis-co/cc-services/support/dns-subdomain-hosted-zone';
import { EnvAlb } from '@sinapsis-co/cc-services/support/env-alb';
import { EnvCluster } from '@sinapsis-co/cc-services/support/env-cluster';
import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { Notifications } from '@sinapsis-co/cc-services/support/notifications';

import { RdsDemo } from './services/business/rds-demo';
import { CdnApi } from './services/support/cdn-api';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// Support Services
new DeployPipeline(coordinator);
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new EnvVpc(coordinator);
new EnvCluster(coordinator);
new EnvAlb(coordinator);
new CdnApi(coordinator);
new Notifications(coordinator);
new GlobalEventBus(coordinator);
new Assets(coordinator);

// Business Services
// new ContainerService(coordinator);
new Identity(coordinator);
new RdsDemo(coordinator);

coordinator.build();
