import { HostedZone, NsRecord } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

export type DnsBaseDomainRefConstructParams = { hostedZoneNS: string };

export class DnsDomainRefPrefab extends Construct {
  /**
   * Creates the DNS records in the parent HostedZone in order
   * @remarks Use it only if you have the root HostedZone in another AWS account
   * @remarks Should be only instance one per solution
   */
  constructor(service: Service, params: DnsBaseDomainRefConstructParams) {
    super(service, getLogicalName(DnsDomainRefPrefab.name));

    if (!params.hostedZoneNS || !service.props.hostedZoneName) return;

    const rootHostedZone = HostedZone.fromLookup(this, 'RootHostedZone', { domainName: service.props.hostedZoneName });

    const nsValues = params.hostedZoneNS.split(',');

    const recordName = service.props.ephemeralEnvName
      ? `${service.props.ephemeralEnvName}.${service.props.envName}.${service.props.baseDomainName}`
      : `${service.props.envName}.${service.props.baseDomainName}`;

    new NsRecord(this, 'NsRecord', { recordName, values: nsValues, zone: rootHostedZone });
  }
}