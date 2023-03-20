import { Service } from '@sinapsis-co/cc-infra/common/service';
import { DnsSubdomainHostedZonePrefab } from '@sinapsis-co/cc-infra/prefab/networking/dns-subdomain-hosted-zone';
import { GlobalCoordinator } from '../../../config/config-type';

type Deps = Record<string, never>;
const depsNames: Array<keyof Deps> = [];

export class DnsSubdomainHostedZone extends Service<GlobalCoordinator> {
  public subdomainHostedZonePrefab: DnsSubdomainHostedZonePrefab;

  constructor(coordinator: GlobalCoordinator) {
    super(coordinator, DnsSubdomainHostedZone.name, depsNames);
    coordinator.addService(this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  build(_deps = {}) {
    const isBootstrapping = this.node.tryGetContext('isBootstrapping') === 'true' ? true : false;

    if (this.props.envName !== 'prod') {
      this.subdomainHostedZonePrefab = new DnsSubdomainHostedZonePrefab(this, { isBootstrapping });
    }
  }
}
