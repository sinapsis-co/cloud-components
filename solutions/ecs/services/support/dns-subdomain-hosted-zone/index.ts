import { Construct, Service } from '@sinapsis-co/cc-core/common/service';
import { DnsSubdomainHostedZoneConstruct } from '@sinapsis-co/cc-core/services/dns-subdomain-hosted-zone';
import { GlobalProps } from '../../../config/config-type';

export class DnsSubdomainHostedZone extends Service<GlobalProps> {
  public readonly hostedZoneNS: string;

  constructor(scope: Construct, globalProps: GlobalProps) {
    super(scope, DnsSubdomainHostedZone.name, globalProps, {});

    const isBootstrapping = this.node.tryGetContext('isBootstrapping') === 'true' ? true : false;

    if (this.props.envName !== 'prod')
      this.hostedZoneNS = new DnsSubdomainHostedZoneConstruct(this, {
        isBootstrapping,
      }).hostedZoneNS;
  }
}
