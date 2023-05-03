import { Service } from '@sinapsis-co/cc-core/common/service';
import { DnsSubdomainHostedZonePrefab } from '@sinapsis-co/cc-core/prefab/networking/dns-subdomain-hosted-zone';
import { GlobalCoordinator } from '../../../config/config-type';

class Dep {}

export class DnsSubdomainHostedZone extends Service<GlobalCoordinator> {
  public subdomainHostedZonePrefab: DnsSubdomainHostedZonePrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsSubdomainHostedZone.name, Dep);
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(dep: Dep): void {
    const isBootstrapping = this.node.tryGetContext('isBootstrapping') === 'true' ? true : false;

    if (this.props.envName !== 'prod') {
      this.subdomainHostedZonePrefab = new DnsSubdomainHostedZonePrefab(this, { isBootstrapping });
    }
  }
}
