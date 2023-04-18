/* eslint-disable no-console */
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { ContainerService } from './services/business/base-container-one';
import { BaseCrud } from './services/business/base-crud';
import { CdnApi } from './services/support/cdn-api';
import { DeployPipeline } from './services/support/deploy-pipeline';
import { DnsDomainRef } from './services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from './services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './services/support/dns-subdomain-hosted-zone';
import { EnvAlb } from './services/support/env-alb';
import { EnvCluster } from './services/support/env-cluster';
import { EnvVpc } from './services/support/env-vpc';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// Support Services
new DeployPipeline(coordinator);
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new EnvVpc(coordinator);
new EnvAlb(coordinator);
new EnvCluster(coordinator);
new CdnApi(coordinator);

// Business Services
new ContainerService(coordinator);
new BaseCrud(coordinator);

coordinator.build();
