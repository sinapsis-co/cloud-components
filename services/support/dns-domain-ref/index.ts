import { DepCheck, ServiceDependencies } from '@sinapsis-co/cc-core/common/coordinator';
import { Service } from '@sinapsis-co/cc-core/common/service';
import { DnsDomainRefPrefab } from '@sinapsis-co/cc-core/prefab/networking/dns-domain-ref';

import { DeployTargetName, GlobalCoordinator } from '@sinapsis-co/cc-services/config/config-type';

import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

class Dep extends ServiceDependencies {
  @DepCheck() dnsSubdomainHostedZone: DnsSubdomainHostedZone;
}

export class DnsDomainRef extends Service<GlobalCoordinator, DeployTargetName> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsDomainRef.name, Dep, { deployTargetName: 'dnsShared' });
    coordinator.addService(this);
  }

  build(dep: Dep): void {
    this.addDependency(dep.dnsSubdomainHostedZone);
    const hostedZoneNS = dep.dnsSubdomainHostedZone.subdomainHostedZonePrefab.hostedZoneNS;
    if (this.props.envName !== 'prod') new DnsDomainRefPrefab(this, { hostedZoneNS });
  }
}
