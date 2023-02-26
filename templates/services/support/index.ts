import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

import { CdnApi } from './cdn-api';
import { CdnMedia } from './cdn-media';
import { CustomEventBus } from './custom-event-bus';
import { DeployPipeline } from './deploy-pipeline';
import { DnsBaseDomainRef } from './dns-base-domain-ref';
import { DnsSubdomainCertificate } from './dns-subdomain-certificate';
import { DnsSubdomainHostedZone } from './dns-subdomain-hosted-zone';
import { EnvAlb } from './env-alb';
import { EnvVpc } from './env-vpc';
import { EventsAnalytics } from './events-analytics';
import { IdentityBackoffice } from './identity-backoffice';
import { Notifications } from './notifications';
import { StripeSupportService } from './stripe';

export class SupportServices {
  public readonly deployPipeline: DeployPipeline;
  public readonly dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  public readonly dnsBaseDomainRef: DnsBaseDomainRef;
  public readonly dnsSubdomainCertificate: DnsSubdomainCertificate;
  public readonly cdnApi: CdnApi;
  public readonly cdnMedia: CdnMedia;
  public readonly customEventBus: CustomEventBus;
  public readonly notifications: Notifications;
  public readonly identityBackoffice: IdentityBackoffice;
  public readonly stripeService: StripeSupportService;
  public readonly eventsAnalytics: EventsAnalytics;
  public readonly envVpc: EnvVpc;
  public readonly envAlb: EnvAlb;

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
    this.identityBackoffice = new IdentityBackoffice(scope, globalProps, {
      customEventBus: this.customEventBus,
      cdnApi: this.cdnApi,
      cdnMedia: this.cdnMedia,
      notifications: this.notifications,
      dnsSubdomainCertificate: this.dnsSubdomainCertificate,
    });
    this.eventsAnalytics = new EventsAnalytics(scope, globalProps, { customEventBus: this.customEventBus });
    this.stripeService = new StripeSupportService(scope, globalProps, this);
    this.envVpc = new EnvVpc(scope, globalProps, {});
    this.envAlb = new EnvAlb(scope, globalProps, {
      certificateService: this.dnsSubdomainCertificate,
      cdnApi: this.cdnApi,
      vpcService: this.envVpc.vpcConstruct,
    });
  }
}
