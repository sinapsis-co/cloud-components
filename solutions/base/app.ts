/* eslint-disable no-console */
import { Coordinator } from '@sinapsis-co/cc-core/common/coordinator';
import { globalConstConfig, globalDeployTargetConfig, globalEnvConfig } from './config';
import { Assets } from './services/business/assets';
import { BaseCrud } from './services/business/base-crud';
import { BaseEvent } from './services/business/base-event';
import { Identity } from './services/business/identity';
import { Search } from './services/business/search';
import { SpaWebapp } from './services/frontend/spa-webapp';
import { SsrLanding } from './services/frontend/ssr-landing';
import { CdnApi } from './services/support/cdn-api';
import { DeployPipeline } from './services/support/deploy-pipeline';
import { DnsDomainRef } from './services/support/dns-domain-ref';
import { DnsSubdomainCertificate } from './services/support/dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './services/support/dns-subdomain-hosted-zone';
import { GlobalEventBus } from './services/support/global-event-bus';
import { Notifications } from './services/support/notifications';

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
new BaseCrud(coordinator);
new BaseEvent(coordinator);
new Search(coordinator);

// Frontend
new SpaWebapp(coordinator);
new SsrLanding(coordinator);

coordinator.build();
