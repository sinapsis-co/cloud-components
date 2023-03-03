import { Certificate, CertificateValidation, ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { Service } from '../../../common/service';

export type DnsSubdomainCertificateConstructParams = {
  certificateArn?: string;
};

export class DnsSubdomainCertificatePrefab extends Construct {
  public readonly certificate: ICertificate;

  constructor(service: Service, params?: DnsSubdomainCertificateConstructParams) {
    super(service, getLogicalName(DnsSubdomainCertificatePrefab.name));

    if (params?.certificateArn) {
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
