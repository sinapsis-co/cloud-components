import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusParams } from '../../../services/custom-event-bus';
import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';

export type EventHandlerParams = BaseHandlerParams & {
  eventConfig: EventConfig[];
};

export type EventFunctionParams = BaseFunctionParams & {
  eventBus: CustomEventBusParams;
};

export class EventFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: EventFunctionParams & EventHandlerParams) {
    super(scope, getLogicalName(EventFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(this, props, params).lambdaFunction;

    const source = params.eventConfig.map((e) => e.source);
    const detailType = params.eventConfig.map((e) => e.name);
    const detailRules = params.eventConfig.reduce((memo, e) => ({ ...memo, ...(e.detail || {}) }), {});

    new Rule(scope, 'EventProcessorRule', {
      eventBus: params.eventBus,
      eventPattern: {
        ...(source.filter((e) => !!e).length > 0 ? { source } : {}),
        ...(detailType.filter((e) => !!e).length > 0 ? { detailType } : {}),
        ...(Object.keys(detailRules).length > 0 ? { detail: detailRules } : {}),
      },
      targets: [new LambdaFunction(this.lambdaFunction)],
    });
  }
}
