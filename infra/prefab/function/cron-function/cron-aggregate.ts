import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

import { BaseServiceProps } from '../../../common/synth/props-types';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CronFunction, CronFunctionParams, CronHandlerParams } from './cron-function';

export type CronAggregateParams<HandlerName extends string = string> = CronFunctionParams & {
  handlers: Record<HandlerName, CronHandlerParams>;
};

export class CronAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(scope: Construct, props: BaseServiceProps, params: CronAggregateParams<HandlerName>) {
    super(scope, getLogicalName(CronAggregate.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new CronFunction(this, props, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
