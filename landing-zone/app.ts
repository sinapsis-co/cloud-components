/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-tenant';
import { Search } from '@sinapsis-co/cc-services/business/search/user-search';
import { Assets } from '@sinapsis-co/cc-services/support/assets';

import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DeployPipeline } from '@sinapsis-co/cc-services/support/deploy-pipeline';
import { DnsDomainRef } from '@sinapsis-co/cc-services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from '@sinapsis-co/cc-services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';
import { Notifications } from '@sinapsis-co/cc-services/support/notifications';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// SupportService
new DeployPipeline(coordinator);
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new CdnApi(coordinator);
new GlobalEventBus(coordinator);
new Notifications(coordinator);
// new EventsAnalytics(coordinator);

// Business
new Identity(coordinator);
new Assets(coordinator);
new Search(coordinator);

coordinator.build();
