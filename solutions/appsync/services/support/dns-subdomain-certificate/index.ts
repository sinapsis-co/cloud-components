import { Service } from '@sinapsis-co/cc-core/common/service';
import { DnsSubdomainCertificatePrefab } from '@sinapsis-co/cc-core/prefab/networking/dns-subdomain-certificate';
import { GlobalCoordinator } from '../../../config/config-type';

import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { DnsDomainRef } from '../dns-domain-ref';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

class Dep extends ServiceDependencies {
  @DepCheck()
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  @DepCheck()
  dnsDomainRef: DnsDomainRef;
}

export class DnsSubdomainCertificate extends Service<GlobalCoordinator> {
  public certificatePrefab: DnsSubdomainCertificatePrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsSubdomainCertificate.name, Dep);
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.addDependency(dep.dnsSubdomainHostedZone);
    this.addDependency(dep.dnsDomainRef);

    this.certificatePrefab = new DnsSubdomainCertificatePrefab(this);
  }
}
