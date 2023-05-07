import { Service } from '@sinapsis-co/cc-core/common/service';
import { SpaPrefab } from '@sinapsis-co/cc-core/prefab/frontend/spa';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Identity } from '@sinapsis-co/cc-services/business/identity/multi-tenant';
import { CdnApi } from '@sinapsis-co/cc-services/support/cdn-api';
import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';

import { GlobalCoordinator } from 'config/config-type';

class Dep extends ServiceDependencies {
  @DepCheck()
  identity: Identity;
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
  @DepCheck()
  cdnApi: CdnApi;
}

export class SpaWebapp extends Service<GlobalCoordinator> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, SpaWebapp.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep) {
    new SpaPrefab(this, {
      subDomain: this.props.subdomain.spaWebapp,
      baseDir: 'frontend/spa-webapp',
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      calculatedSecrets: {
        SKIP_PREFLIGHT_CHECK: 'true',
        VITE_APP_API_URL: dep.cdnApi.cdnApiPrefab.baseUrl,
        ...dep.identity.authPool.frontendRefs,
      },
    });
  }
}
