import { Construct } from 'constructs';
import { HostedZone, NsRecord } from 'aws-cdk-lib/aws-route53';

import { Service } from '../../common/service';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type DnsBaseDomainRefConstructParams = { hostedZoneNS: string };

export class DnsBaseDomainRefConstruct extends Construct {
  constructor(service: Service, params: DnsBaseDomainRefConstructParams) {
    super(service, getLogicalName(DnsBaseDomainRefConstruct.name));

    if (!params.hostedZoneNS || !service.props.hostedZoneName) return;

    const rootHostedZone = HostedZone.fromLookup(this, 'RootHostedZone', { domainName: service.props.hostedZoneName });

    const nsValues = params.hostedZoneNS.split(',');

    const recordName = service.props.ephemeralEnvName
      ? `${service.props.ephemeralEnvName}.${service.props.envName}.${service.props.baseDomainName}`
      : `${service.props.envName}.${service.props.baseDomainName}`;

    new NsRecord(this, 'NsRecord', { recordName, values: nsValues, zone: rootHostedZone });
  }
}
