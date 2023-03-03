import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

import { CdnApi } from './cdn-api';
import { CdnAssets } from './cdn-assets';
import { DeployPipeline } from './deploy-pipeline';
import { DnsDomainRef } from './dns-domain-ref';
import { DnsSubdomainCertificate } from './dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './dns-subdomain-hosted-zone';
import { EventBus } from './event-bus';
import { EventsAnalytics } from './events-analytics';
import { Notifications } from './notifications';

export class SupportServices {
  public readonly deployPipeline: DeployPipeline;
  public readonly dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  public readonly dnsDomainRef: DnsDomainRef;
  public readonly dnsSubdomainCertificate: DnsSubdomainCertificate;
  public readonly cdnApi: CdnApi;
  public readonly cdnAssets: CdnAssets;
  public readonly eventBus: EventBus;
  public readonly notifications: Notifications;
  public readonly eventsAnalytics: EventsAnalytics;

  constructor(scope: Construct, globalProps: GlobalProps) {
    this.deployPipeline = new DeployPipeline(scope, globalProps);
    this.dnsSubdomainHostedZone = new DnsSubdomainHostedZone(scope, globalProps);
    this.dnsDomainRef = new DnsDomainRef(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
    });
    this.dnsSubdomainCertificate = new DnsSubdomainCertificate(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
      dnsDomainRef: this.dnsDomainRef,
    });
    this.cdnApi = new CdnApi(scope, globalProps, { dnsSubdomainCertificate: this.dnsSubdomainCertificate });
    this.cdnAssets = new CdnAssets(scope, globalProps, { dnsSubdomainCertificate: this.dnsSubdomainCertificate });
    this.eventBus = new EventBus(scope, globalProps);
    this.notifications = new Notifications(scope, globalProps, {
      eventBus: this.eventBus,
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
      dnsDomainRef: this.dnsDomainRef,
    });
    this.eventsAnalytics = new EventsAnalytics(scope, globalProps, { eventBus: this.eventBus });
  }
}
