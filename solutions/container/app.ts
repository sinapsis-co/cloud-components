/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { EnvVpc } from '@sinapsis-co/cc-services/support/env-vpc';

import { Database } from 'services/support/database';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// Support Services
// new DeployPipeline(coordinator);
// new DnsSubdomainHostedZone(coordinator);
// new DnsDomainRef(coordinator);
// new DnsSubdomainCertificate(coordinator);
// new GlobalEventBus(coordinator);
new EnvVpc(coordinator);
// new EnvCluster(coordinator);
// new EnvAlb(coordinator);
// new CdnApi(coordinator);
// new Notifications(coordinator);
// new Assets(coordinator);
new Database(coordinator);

// Business Services
// new ContainerService(coordinator);
// new Identity(coordinator);

coordinator.build();
