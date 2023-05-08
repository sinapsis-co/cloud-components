import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';

import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { GlobalEventBus } from '@sinapsis-co/cc-services/support/global-event-bus';

import { GlobalCoordinator } from 'config/config-type';
import { menuSchema } from 'services/business/menu/catalog';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  globalEventBus: GlobalEventBus;
  // cdnApi: CdnApi;
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
      schemas: [menuSchema.Ingredient.IngredientResolver],
      eventBusPrefab: dep.globalEventBus.eventBusPrefab,
      domainConfig: {
        subdomain: this.props.subdomain.graphql,
        certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      },
    });
  }
}
