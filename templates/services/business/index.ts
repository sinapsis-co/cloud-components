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
import { BaseCrud } from './base-crud';
import { BaseEvent } from './base-event';
import { SearchService } from './search';
import { Category } from './category';
import { Place } from './place';
import { Product } from './product';

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
  public readonly category: Category;
  public readonly place: Place;
  public readonly product: Product;

  constructor(scope: Construct, globalProps: GlobalProps, dependencies: Omit<GlobalServiceDependencies, 'identity'>) {
    this.identity = new Identity(scope, globalProps, dependencies);

    const globalDeps: GlobalServiceDependencies = { ...dependencies, identity: this.identity };

    this.assets = new Assets(scope, globalProps, globalDeps);
    this.baseCrud = new BaseCrud(scope, globalProps, globalDeps);
    this.baseEvent = new BaseEvent(scope, globalProps, globalDeps);
    this.searchService = new SearchService(scope, globalProps, globalDeps);
    this.category = new Category(scope, globalProps, globalDeps);
    this.place = new Place(scope, globalProps, globalDeps);
    this.product = new Product(scope, globalProps, globalDeps);

  }
}
