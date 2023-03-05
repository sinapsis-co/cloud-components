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
import { Coordinator } from '../../app';
import { CdnApi } from '../support/cdn-api';
import { GlobalEventBus } from '../support/global-event-bus';

export type GlobalServiceDependencies = {
  notifications: Notifications;
  cdnApi: CdnApi;
  cdnAssets: CdnAssets;
  globalEventBus: GlobalEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  identity: Identity;
};

export class BusinessServices {
  public readonly identity: Identity;
  public readonly baseCrud: BaseCrud;
  public readonly baseEvent: BaseEvent;
  public readonly assets: Assets;
  public readonly searchService: Search;

  constructor(coordinator: Coordinator, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    this.identity = new Identity(coordinator, coordinator.globalProps, dependencies);

    const globalDeps: GlobalServiceDependencies = { ...dependencies, identity: this.identity };

    this.assets = new Assets(coordinator, coordinator.globalProps, globalDeps);
    this.baseCrud = new BaseCrud(coordinator, coordinator.globalProps, globalDeps);
    this.baseEvent = new BaseEvent(coordinator, coordinator.globalProps, globalDeps);
    this.searchService = new Search(coordinator, coordinator.globalProps, globalDeps);
  }
}
