import { Service } from '@sinapsis-co/cc-infra/common/service';
import { DnsSubdomainCertificatePrefab } from '@sinapsis-co/cc-infra/prefab/networking/dns-subdomain-certificate';
import { GlobalCoordinator } from '../../../config/config-type';

import { DnsDomainRef } from '../dns-domain-ref';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type Deps = {
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsDomainRef: DnsDomainRef;
};
const depsNames: Array<keyof Deps> = ['dnsSubdomainHostedZone', 'dnsDomainRef'];

export class DnsSubdomainCertificate extends Service<GlobalCoordinator> {
  public certificatePrefab: DnsSubdomainCertificatePrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsSubdomainCertificate.name, depsNames);
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.addDependency(deps.dnsSubdomainHostedZone);
    this.addDependency(deps.dnsDomainRef);

    this.certificatePrefab = new DnsSubdomainCertificatePrefab(this);
  }
}
