/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { GraphqlApi } from 'services/business/graphql-api';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';
import { Menu } from './services/business/menu';
import { DnsDomainRef } from './services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from './services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from './services/support/global-event-bus';

const coordinator = new Coordinator(globalConstConfig, globalEnvConfig, globalDeployTargetConfig);

// SupportService
// new DeployPipeline(coordinator);
new DnsSubdomainHostedZone(coordinator);
new DnsDomainRef(coordinator);
new DnsSubdomainCertificate(coordinator);
// new CdnApi(coordinator);
new GlobalEventBus(coordinator);
// new Notifications(coordinator);
// new EventsAnalytics(coordinator);

// Business
// new Identity(coordinator);
// new Assets(coordinator);
new Menu(coordinator);
new GraphqlApi(coordinator);

// Frontend
// new SpaWebapp(coordinator);
// new SsrLanding(coordinator);

coordinator.build();
