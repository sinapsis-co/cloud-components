import { Construct } from 'constructs';
import { RemovalPolicy, Fn } from 'aws-cdk-lib';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';

import { BaseServiceProps } from '../../common/synth/props-types';
import { getDomain } from '../../common/naming/get-domain';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';

export type DnsSubdomainHostedZoneParams = { isBootstrapping: boolean };

export class DnsSubdomainHostedZoneConstruct extends Construct {
  public readonly hostedZoneNS: string;

  constructor(scope: Construct, props: BaseServiceProps, params: DnsSubdomainHostedZoneParams) {
    super(scope, getLogicalName(DnsSubdomainHostedZoneConstruct.name));

    const hostedZone = new HostedZone(scope, 'HostedZoneEnvDns', { zoneName: getDomain('', props) });
    hostedZone.applyRemovalPolicy(RemovalPolicy.DESTROY);

    const nsArray = hostedZone.hostedZoneNameServers as string[];
    new StringParameter(this, 'HostedZoneNameServersParameter', {
      simpleName: true,
      parameterName: getResourceName('HostedZoneNameServers', props),
      stringValue: Fn.join(',', nsArray),
    });

    if (!params.isBootstrapping) {
      this.hostedZoneNS = StringParameter.valueFromLookup(this, getResourceName('HostedZoneNameServers', props));
    }
  }
}
