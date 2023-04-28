import { Service } from '@sinapsis-co/cc-core/common/service';
import { AppSyncPrefab } from '@sinapsis-co/cc-core/prefab/gateway/app-sync';

import { DnsSubdomainCertificate } from 'services/support/dns-subdomain-certificate';
import { GlobalCoordinator } from '../../../config/config-type';
import { GlobalEventBus } from '../../support/global-event-bus';

type Deps = {
  globalEventBus: GlobalEventBus;
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  // cdnApi: CdnApi;
  // identity: Identity;
};
// const depsNames: Array<keyof Deps> = ['globalEventBus', 'cdnApi', 'identity'];
const depsNames: Array<keyof Deps> = ['globalEventBus', 'dnsSubdomainCertificate'];

export class GraphqlApi extends Service<GlobalCoordinator> {
  public api: AppSyncPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, GraphqlApi.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.api = new AppSyncPrefab(this, {
      name: 'graphql',
      baseApiFolder: __dirname,
      domainConfig: {
        subdomain: this.props.subdomain.graphql,
        certificate: deps.dnsSubdomainCertificate.certificatePrefab.certificate,
      },
    });
  }
}
