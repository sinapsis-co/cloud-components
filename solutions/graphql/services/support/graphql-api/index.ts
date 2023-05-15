import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';

import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { GlobalCoordinator } from 'config/config-type';
import { ingredientSchema } from 'services/business/menu/catalog';
import { saleSchema } from 'services/business/sales/catalog';
import { CdnApi } from '../cdn-api';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  @DepCheck()
  cdnApi: CdnApi;
  // @DepCheck()
  // identity: Identity;
}

export class GraphqlApi extends Service<GlobalCoordinator> {
  public appSyncPrefab: AppSyncPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GraphqlApi.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.appSyncPrefab = new AppSyncPrefab(this, {
      name: 'graphql',
      baseFolder: __dirname,
      schemas: [ingredientSchema.IngredientResolver, saleSchema.SaleResolver],
      cdnApiPrefab: dep.cdnApi.cdnApiPrefab,
      eventBusPrefab: dep.globalEventBus.eventBusPrefab,
    });
  }
}
