import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DnsSubdomainHostedZonePrefab } from '@sinapsis-co/cc-infra-v2/prefab/networking/dns-subdomain-hosted-zone';
import { GlobalProps } from '../../../config/config-type';

export class DnsSubdomainHostedZone extends Service<GlobalProps> {
  public readonly subdomainHostedZonePrefab: DnsSubdomainHostedZonePrefab;

  constructor(scope: Construct, globalProps: GlobalProps, params = {}) {
    super(scope, DnsSubdomainHostedZone.name, globalProps, { params });

    const isBootstrapping = this.node.tryGetContext('isBootstrapping') === 'true' ? true : false;

    if (this.props.envName !== 'prod') {
      this.subdomainHostedZonePrefab = new DnsSubdomainHostedZonePrefab(this, { isBootstrapping });
    }
  }
}
