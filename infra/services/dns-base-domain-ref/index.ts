import { Construct } from 'constructs';
import { HostedZone, NsRecord } from 'aws-cdk-lib/aws-route53';

import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';

export type DnsBaseDomainRefConstructParams = { hostedZoneNS: string };

export class DnsBaseDomainRefConstruct extends Construct {
  constructor(scope: Construct, props: BaseServiceProps, params: DnsBaseDomainRefConstructParams) {
    super(scope, getLogicalName(DnsBaseDomainRefConstruct.name));

    if (!params.hostedZoneNS || !props.hostedZoneName) return;

    const rootHostedZone = HostedZone.fromLookup(this, 'RootHostedZone', { domainName: props.hostedZoneName });

    const nsValues = params.hostedZoneNS.split(',');

    const recordName = props.ephemeralEnvName
      ? `${props.ephemeralEnvName}.${props.envName}.${props.baseDomainName}`
      : `${props.envName}.${props.baseDomainName}`;

    new NsRecord(this, 'NsRecord', { recordName, values: nsValues, zone: rootHostedZone });
  }
}
