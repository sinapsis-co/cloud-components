import { IEventBus, Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { EventConfig } from '@sinapsis-co/cc-platform-v2/catalog/event';
import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type EventHandlerParams = BaseHandlerParams & {
  eventConfig: EventConfig[];
};

export type EventFunctionParams = BaseFunctionParams & {
  eventBus: IEventBus;
};

export class EventFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: EventFunctionParams & EventHandlerParams) {
    super(service, getLogicalName(EventFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    const source = params.eventConfig.map((e) => e.source);
    const detailType = params.eventConfig.map((e) => e.name);
    const detailRules = params.eventConfig.reduce((memo, e) => ({ ...memo, ...(e.detail || {}) }), {});

    new Rule(service, getLogicalName('EventProcessorRule', params.name), {
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
