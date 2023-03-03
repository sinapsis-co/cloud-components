import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DnsDomainRefPrefab } from '@sinapsis-co/cc-infra-v2/prefab/networking/dns-base-domain-ref';

import { GlobalProps } from '../../../config/config-type';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type DnsBaseDomainRefParams = { dnsSubdomainHostedZone: DnsSubdomainHostedZone };

export class DnsDomainRef extends Service<GlobalProps, DnsBaseDomainRefParams> {
  constructor(scope: Construct, globalProps: GlobalProps, params: DnsBaseDomainRefParams) {
    super(scope, DnsDomainRef.name, globalProps, { params, deployConfigName: 'dnsShared' });

    const hostedZoneNS = params.dnsSubdomainHostedZone.subdomainHostedZonePrefab.hostedZoneNS;

    this.addDependency(params.dnsSubdomainHostedZone);

    if (this.props.envName !== 'prod') new DnsDomainRefPrefab(this, { hostedZoneNS });
  }
}
