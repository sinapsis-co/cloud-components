import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

import { BaseAggregateParams } from '../base-function';
import { CronFunction, CronHandlerParams } from './cron-function';

export type CronAggregateParams<HandlerName extends string = string> = BaseAggregateParams & {
  name?: string;
  handlers: Record<HandlerName, CronHandlerParams>;
};

export class CronAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: CronAggregateParams<HandlerName>) {
    super(service, getLogicalName(CronAggregate.name, params.name));

    Object.keys(params.handlers).forEach((handler: string) => {
      this.handlers[handler] = new CronFunction(service, {
        ...params,
        ...params.handlers[handler],
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
