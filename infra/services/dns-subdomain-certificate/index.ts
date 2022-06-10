import { Construct } from 'constructs';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Certificate, CertificateValidation, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';

import { getDomain } from '../../common/naming/get-domain';
import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type DnsSubdomainCertificateConstructParams = {
  certificateArn?: string;
};

export class DnsSubdomainCertificateConstruct extends Construct {
  public readonly certificate: ICertificate;

  constructor(service: Service, params: DnsSubdomainCertificateConstructParams) {
    super(service, getLogicalName(DnsSubdomainCertificateConstruct.name));

    if (params.certificateArn) {
      this.certificate = Certificate.fromCertificateArn(this, 'HostedZoneEnvDns', params.certificateArn);
    } else {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      this.certificate = new Certificate(this, 'Certificate', {
        domainName: getDomain('', service.props),
        subjectAlternativeNames: [getDomain('*', service.props)],
        validation: CertificateValidation.fromDns(hostedZone),
      });
    }
  }
}
