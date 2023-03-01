import { DnsSubdomainHostedZoneConstruct } from '@sinapsis-co/cc-infra-v2/services/dns-subdomain-hosted-zone';
import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
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
