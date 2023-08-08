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

    const props = { ...service.props, isSingleProjectAccount: false };

    if (!params.hostedZoneNS || !props.hostedZoneName) return;

    const rootHostedZone = HostedZone.fromLookup(this, 'RootHostedZone', { domainName: props.hostedZoneName });

    const nsValues = params.hostedZoneNS.split(',');

    const recordName = props.ephemeralEnvName
      ? `${props.ephemeralEnvName}.${props.envName}.${props.baseDomainName}`
      : `${props.envName}.${props.baseDomainName}`;

    new NsRecord(this, 'NsRecord', { recordName, values: nsValues, zone: rootHostedZone });
  }
}
