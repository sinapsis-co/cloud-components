import { Construct } from 'constructs';
import { CfnWebACL } from 'aws-cdk-lib/aws-wafv2';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';

export type WafProps = {
  wafEnabled: boolean;
  rules?: CfnWebACL['rules'];
};

export class Waf extends Construct {
  public readonly webACL: CfnWebACL | undefined;

  constructor(scope: Construct, id: string, props: BaseServiceProps & WafProps) {
    super(scope, getLogicalName(id, Waf.name));
    const defaultRules = [
      {
        priority: 0,
        name: getResourceName(`${id}-BotControlRule`, props),
        overrideAction: { none: {} },
        visibilityConfig: {
          sampledRequestsEnabled: true,
          cloudWatchMetricsEnabled: true,
          metricName: getResourceName(`${id}-BotControlRule`, props),
        },
        statement: {
          managedRuleGroupStatement: {
            vendorName: 'AWS',
            name: 'AWSManagedRulesBotControlRuleSet',
          },
        },
      },
    ];

    // if (props.wafEnabled) {
    this.webACL = new CfnWebACL(this, getLogicalName(Waf.name, 'WebACL'), {
      name: getResourceName(`${id}-WebACL`, props),
      scope: 'CLOUDFRONT',
      defaultAction: { allow: {} },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudWatchMetricsEnabled: true,
        metricName: getResourceName(`${id}-WebACL`, props),
      },
      rules: props.rules || defaultRules,
    });
    // }
  }
}
