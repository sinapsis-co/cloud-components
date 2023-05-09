import { Service } from '@sinapsis-co/cc-core/common/service';
import { CdnApiPrefab } from '@sinapsis-co/cc-core/prefab/gateway/cdn-api';
import { GlobalCoordinator } from '../../../config/config-type';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { DnsSubdomainCertificate } from '../dns-subdomain-certificate';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainCertificate: DnsSubdomainCertificate;
}

export class CdnApi extends Service<GlobalCoordinator> {
  public cdnApiPrefab: CdnApiPrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, CdnApi.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.cdnApiPrefab = new CdnApiPrefab(this, {
      subDomain: this.props.subdomain.api,
      certificate: dep.dnsSubdomainCertificate.certificatePrefab.certificate,
      headersWhitelist: ['X-Api-Key'],
    });
  }
}
