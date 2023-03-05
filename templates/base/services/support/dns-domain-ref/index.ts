import { Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DnsDomainRefPrefab } from '@sinapsis-co/cc-infra-v2/prefab/networking/dns-domain-ref';
import { DeployTargetName, GlobalCoordinator } from '../../../config/config-type';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type Deps = {
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
};
const depsNames: Array<keyof Deps> = ['dnsSubdomainHostedZone'];

export class DnsDomainRef extends Service<GlobalCoordinator, DeployTargetName> {
  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsDomainRef.name, depsNames, 'dnsShared');
    coordinator.addService(this);
  }

  build(deps: Deps) {
    this.addDependency(deps.dnsSubdomainHostedZone);
    const hostedZoneNS = deps.dnsSubdomainHostedZone.subdomainHostedZonePrefab.hostedZoneNS;
    if (this.props.envName !== 'prod') new DnsDomainRefPrefab(this, { hostedZoneNS });
  }
}
