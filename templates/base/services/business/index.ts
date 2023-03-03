import { Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { GlobalProps } from '../../config/config-type';

// Services
import { Assets } from './assets';
import { BaseCrud } from './base-crud';
import { BaseEvent } from './base-event';
import { Identity } from './identity';
import { Search } from './search';

// External Services
import { CdnAssets } from 'services/support/cdn-assets';
import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { Notifications } from 'services/support/notifications';
import { CdnApi } from '../support/cdn-api';
import { EventBus } from '../support/event-bus';

export type GlobalServiceDependencies = {
  notifications: Notifications;
  cdnApi: CdnApi;
  cdnAssets: CdnAssets;
  eventBus: EventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  identity: Identity;
};

export class BusinessServices {
  public readonly identity: Identity;
  public readonly baseCrud: BaseCrud;
  public readonly baseEvent: BaseEvent;
  public readonly assets: Assets;
  public readonly searchService: Search;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    this.identity = new Identity(scope, globalProps, dependencies);

    const globalDeps: GlobalServiceDependencies = { ...dependencies, identity: this.identity };

    this.assets = new Assets(scope, globalProps, globalDeps);
    this.baseCrud = new BaseCrud(scope, globalProps, globalDeps);
    this.baseEvent = new BaseEvent(scope, globalProps, globalDeps);
    this.searchService = new Search(scope, globalProps, globalDeps);
  }
}
