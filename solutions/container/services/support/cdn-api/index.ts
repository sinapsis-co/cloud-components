import { DepCheck } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { CdnApiPrefab } from '@sinapsis-co/cc-core/prefab/gateway/cdn-api';

import { DnsSubdomainCertificate } from '@sinapsis-co/cc-services/support/dns-subdomain-certificate';
import { EnvAlb } from '@sinapsis-co/cc-services/support/env-alb';

import { GlobalCoordinator } from 'solutions/container/config/config-type';

class Dep {
  @DepCheck()
  envAlb: EnvAlb;
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
      albDefaultBehavior: dep.envAlb.albPrefab,
    });
  }
}
