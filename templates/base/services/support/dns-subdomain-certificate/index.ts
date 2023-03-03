import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { DnsSubdomainCertificatePrefab } from '@sinapsis-co/cc-infra-v2/prefab/networking/dns-subdomain-certificate';

import { GlobalProps } from '../../../config/config-type';
import { DnsDomainRef } from '../dns-domain-ref';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type ServiceDependencies = {
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsDomainRef: DnsDomainRef;
};

export class DnsSubdomainCertificate extends Service<GlobalProps, ServiceDependencies> {
  public readonly certificatePrefab: DnsSubdomainCertificatePrefab;

  constructor(scope: Construct, globalProps: GlobalProps, params: ServiceDependencies) {
    super(scope, DnsSubdomainCertificate.name, globalProps, { params });

    this.addDependency(params.dnsSubdomainHostedZone);
    this.addDependency(params.dnsDomainRef);

    this.certificatePrefab = new DnsSubdomainCertificatePrefab(this);
  }
}
