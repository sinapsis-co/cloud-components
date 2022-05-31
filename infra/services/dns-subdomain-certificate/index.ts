import { Construct } from 'constructs';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';

import { getDomain } from '../../common/naming/get-domain';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export class DnsSubdomainCertificateConstruct extends Construct {
  public readonly certificate: Certificate;

  constructor(scope: Construct, props: BaseServiceProps) {
    super(scope, getLogicalName(DnsSubdomainCertificateConstruct.name));

    const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', props) });

    this.certificate = new Certificate(this, 'Certificate', {
      domainName: getDomain('', props),
      subjectAlternativeNames: [getDomain('*', props)],
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}
