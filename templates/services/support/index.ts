import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

import { DeployPipeline } from './deploy-pipeline';
import { DnsSubdomainHostedZone } from './dns-subdomain-hosted-zone';
import { DnsBaseDomainRef } from './dns-base-domain-ref';
import { DnsSubdomainCertificate } from './dns-subdomain-certificate';
import { CdnApi } from './cdn-api';
import { CustomEventBus } from './custom-event-bus';
import { CdnMedia } from './cdn-media';
import { Notifications } from './notifications';
import { EventsAnalytics } from './events-analytics';

export class SupportServices {
  public readonly deployPipeline: DeployPipeline;
  public readonly dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  public readonly dnsBaseDomainRef: DnsBaseDomainRef;
  public readonly dnsSubdomainCertificate: DnsSubdomainCertificate;
  public readonly cdnApi: CdnApi;
  public readonly cdnMedia: CdnMedia;
  public readonly customEventBus: CustomEventBus;
  public readonly notifications: Notifications;
  public readonly eventsAnalytics: EventsAnalytics;

  constructor(scope: Construct, globalProps: GlobalProps) {
    this.deployPipeline = new DeployPipeline(scope, globalProps);
    this.dnsSubdomainHostedZone = new DnsSubdomainHostedZone(scope, globalProps);
    this.dnsBaseDomainRef = new DnsBaseDomainRef(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
    });
    this.dnsSubdomainCertificate = new DnsSubdomainCertificate(scope, globalProps, {
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
      dnsBaseDomainRef: this.dnsBaseDomainRef,
    });
    this.cdnApi = new CdnApi(scope, globalProps, { certificateService: this.dnsSubdomainCertificate });
    this.cdnMedia = new CdnMedia(scope, globalProps, { certificateService: this.dnsSubdomainCertificate });
    this.customEventBus = new CustomEventBus(scope, globalProps);
    this.notifications = new Notifications(scope, globalProps, {
      customEventBus: this.customEventBus,
      dnsSubdomainHostedZone: this.dnsSubdomainHostedZone,
      dnsBaseDomainRef: this.dnsBaseDomainRef,
    });
    this.eventsAnalytics = new EventsAnalytics(scope, globalProps, { customEventBus: this.customEventBus });
  }
}
