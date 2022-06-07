import { Construct } from 'constructs';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';

import { getDomain } from '../../common/naming/get-domain';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export class DnsSubdomainCertificateConstruct extends Construct {
  public readonly certificate: Certificate;

  constructor(service: Service) {
    super(service.scope, getLogicalName(DnsSubdomainCertificateConstruct.name));

    const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });

    this.certificate = new Certificate(this, 'Certificate', {
      domainName: getDomain('', service.props),
      subjectAlternativeNames: [getDomain('*', service.props)],
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}
