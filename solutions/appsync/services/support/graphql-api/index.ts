import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';

import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../global-event-bus';
import { schemaPath } from './schema-builder';

type Deps = {
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  globalEventBus: GlobalEventBus;
  // cdnApi: CdnApi;
  // identity: Identity;
};
// const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
const depsNames: Array<keyof Deps> = ['globalEventBus', 'dnsSubdomainCertificate'];

export class GraphqlApi extends Service<GlobalCoordinator> {
  public appSyncPrefab: AppSyncPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GraphqlApi.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.appSyncPrefab = new AppSyncPrefab(this, {
      name: 'graphql',
      consolidatedSchemaPath: schemaPath,
      eventBusPrefab: deps.globalEventBus.eventBusPrefab,
      domainConfig: {
        subdomain: this.props.subdomain.graphql,
        certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      },
    });
  }
}
