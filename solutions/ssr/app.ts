/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';

import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsDomainRef } from '@sinapsis-co/cc-services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from '@sinapsis-co/cc-services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { SsrLanding } from './services/frontend/ssr-landing';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// SupportService
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
new CdnApi(coordinator);
new GlobalEventBus(coordinator);

// Business

// Frontend
new SsrLanding(coordinator);

coordinator.build();
