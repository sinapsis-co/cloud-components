/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { Assets } from '@sinapsis-co/cc-services/support/assets';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsDomainRef } from '@sinapsis-co/cc-services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from '@sinapsis-co/cc-services/support/dns-subdomain-hosted-zone';
import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { Product } from 'services/business/product';
import { Database } from 'services/support/database';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// Support Services
// new DeployPipeline(coordinator);
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new GlobalEventBus(coordinator);
new EnvVpc(coordinator);
// new EnvCluster(coordinator);
// new EnvAlb(coordinator);
new CdnApi(coordinator);
// new Notifications(coordinator);
new Assets(coordinator);
new Database(coordinator);

// Business Services
// new ContainerService(coordinator);
// new Identity(coordinator);
new Product(coordinator);

coordinator.build();
