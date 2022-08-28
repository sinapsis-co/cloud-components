import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { Identity } from './identity';

// External Services
import { CdnApi } from '../support/cdn-api';
import { CustomEventBus } from '../support/custom-event-bus';
import { Notifications } from 'services/support/notifications';
import { Assets } from './assets';
import { CdnMedia } from 'services/support/cdn-media';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { SsrLanding } from '../frontend/ssr-landing';
import { BaseCrud } from './base-crud';
import { BaseEvent } from './base-event';
import { SearchService } from './search';

export type GlobalServiceDependencies = {
  notifications: Notifications;
  cdnApi: CdnApi;
  cdnMedia: CdnMedia;
  customEventBus: CustomEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  identity: Identity;
};

export class BusinessServices {
  public readonly identity: Identity;
  public readonly baseCrud: BaseCrud;
  public readonly baseEvent: BaseEvent;
  public readonly assets: Assets;
  public readonly searchService: SearchService;
  public readonly ssrLanding: SsrLanding;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    this.identity = new Identity(scope, globalProps, dependencies);

    const globalDeps: GlobalServiceDependencies = { ...dependencies, identity: this.identity };

    this.assets = new Assets(scope, globalProps, globalDeps);
    this.baseCrud = new BaseCrud(scope, globalProps, globalDeps);
    this.baseEvent = new BaseEvent(scope, globalProps, globalDeps);
    this.searchService = new SearchService(scope, globalProps, globalDeps);
    this.ssrLanding = new SsrLanding(scope, globalProps, globalDeps);
  }
}
