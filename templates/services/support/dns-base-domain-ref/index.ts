import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { DnsBaseDomainRefConstruct } from '@sinapsis-co/cc-infra-v2/services/dns-base-domain-ref';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type DnsBaseDomainRefParams = { dnsSubdomainHostedZone: DnsSubdomainHostedZone };

export class DnsBaseDomainRef extends Service<GlobalProps, DnsBaseDomainRefParams> {
  constructor(scope: Construct, globalProps: GlobalProps, params: DnsBaseDomainRefParams) {
    super(scope, DnsBaseDomainRef.name, globalProps, { params, deployConfigName: 'dnsShared' });

    const hostedZoneNS = params.dnsSubdomainHostedZone.hostedZoneNS;

    this.addDependency(params.dnsSubdomainHostedZone);

    if (this.props.envName !== 'prod') new DnsBaseDomainRefConstruct(this, { hostedZoneNS });
  }
}
