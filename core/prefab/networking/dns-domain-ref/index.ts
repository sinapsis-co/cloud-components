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

    const overriddenService: Service = Object.assign({ props: { ...service.props } }, service);
    overriddenService.props.isSingleProjectAccount = false;

    if (!params.hostedZoneNS || !overriddenService.props.hostedZoneName) return;

    const rootHostedZone = HostedZone.fromLookup(this, 'RootHostedZone', {
      domainName: overriddenService.props.hostedZoneName,
    });

    const nsValues = params.hostedZoneNS.split(',');

    const recordName = overriddenService.props.ephemeralEnvName
      ? `${overriddenService.props.ephemeralEnvName}.${overriddenService.props.envName}.${overriddenService.props.baseDomainName}`
      : `${overriddenService.props.envName}.${overriddenService.props.baseDomainName}`;

    new NsRecord(this, 'NsRecord', { recordName, values: nsValues, zone: rootHostedZone });
  }
}
