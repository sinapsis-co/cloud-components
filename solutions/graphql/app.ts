/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

// CC-Services
import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-tenant';
import { Assets } from '@sinapsis-co/cc-services/support/assets';
import { DnsDomainRef } from '@sinapsis-co/cc-services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from '@sinapsis-co/cc-services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { Notifications } from '@sinapsis-co/cc-services/support/notifications';

import { Sales } from 'services/business/sales';
import { CdnApi } from 'services/support/cdn-api';
import { Menu } from './services/business/menu';
import { GraphqlApi } from './services/support/graphql-api';

// Custom Services

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new CdnApi(coordinator);
new GlobalEventBus(coordinator);
new Notifications(coordinator);
new GraphqlApi(coordinator);
new Assets(coordinator);

// Business
new Identity(coordinator);
new Menu(coordinator);
new Sales(coordinator);

coordinator.build();
