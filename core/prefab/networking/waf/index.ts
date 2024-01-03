import { CfnWebACL } from 'aws-cdk-lib/aws-wafv2';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { BaseServiceProps } from 'common/synth/props-types';

export type WafProps = {
  wafEnabled: boolean;
  rules?: CfnWebACL['rules'];
};

export class WafPrefab extends Construct {
  public readonly webACL: CfnWebACL | undefined;

  constructor(service: Service, props: BaseServiceProps & WafProps) {
    super(service, getLogicalName(WafPrefab.name));
    const defaultRules = [
      {
        priority: 0,
        name: getResourceName('BotControlRule', props),
        overrideAction: { none: {} },
        visibilityConfig: {
          sampledRequestsEnabled: true,
          cloudWatchMetricsEnabled: true,
          metricName: getResourceName('BotControlRuleMetric', props),
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
    this.webACL = new CfnWebACL(this, getLogicalName(WafPrefab.name, 'WebACL'), {
      name: getResourceName('WebACL', props),
      scope: 'CLOUDFRONT',
      defaultAction: { allow: {} },
      visibilityConfig: {
        sampledRequestsEnabled: true,
        cloudWatchMetricsEnabled: true,
        metricName: getResourceName('WebACLMetric', props),
      },
      rules: props.rules || defaultRules,
    });
    // }
  }
}
