import { Service, Construct } from '@sinapsis-co/cc-infra-v2/common/service';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { DnsSubdomainCertificateConstruct } from '@sinapsis-co/cc-infra-v2/services/dns-subdomain-certificate';

import { GlobalProps } from '../../../config/config-type';
import { DnsBaseDomainRef } from '../dns-base-domain-ref';
import { DnsSubdomainHostedZone } from '../dns-subdomain-hosted-zone';

type ServiceDependencies = {
  dnsSubdomainHostedZone: DnsSubdomainHostedZone;
  dnsBaseDomainRef: DnsBaseDomainRef;
};

export class DnsSubdomainCertificate extends Service<GlobalProps, ServiceDependencies> {
  public readonly certificate: ICertificate;

  constructor(scope: Construct, globalProps: GlobalProps, params: ServiceDependencies) {
    super(scope, DnsSubdomainCertificate.name, globalProps, { params });

    this.addDependency(params.dnsSubdomainHostedZone);
    this.addDependency(params.dnsBaseDomainRef);

    this.certificate = new DnsSubdomainCertificateConstruct(this).certificate;
  }
}