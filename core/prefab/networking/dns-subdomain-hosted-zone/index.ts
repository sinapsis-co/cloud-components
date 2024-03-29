import { Fn, RemovalPolicy } from 'aws-cdk-lib';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

export type DnsSubdomainHostedZoneParams = { isBootstrapping: boolean };

export class DnsSubdomainHostedZonePrefab extends Construct {
  public readonly hostedZoneNS: string;

  constructor(service: Service, params: DnsSubdomainHostedZoneParams) {
    super(service, getLogicalName(DnsSubdomainHostedZonePrefab.name));

    const hostedZone = new HostedZone(service, 'HostedZoneEnvDns', { zoneName: getDomain('', service.props) });
    hostedZone.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const nsArray = hostedZone.hostedZoneNameServers as string[];
    new StringParameter(this, 'HostedZoneNameServersParameter', {
      simpleName: true,
      parameterName: getResourceName('HostedZoneNameServers', service.props),
      stringValue: Fn.join(',', nsArray),
    });

    if (!params.isBootstrapping) {
      this.hostedZoneNS = StringParameter.valueFromLookup(
        this,
        getResourceName('HostedZoneNameServers', service.props)
      );
    }
  }
}
