import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { CronFunction, CronHandlerParams } from './cron-function';
import { BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type CronAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  handlers: Record<HandlerName, CronHandlerParams>;
};

export class CronAggregate<HandlerName extends string = string> extends Construct {
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: CronAggregateParams<HandlerName>) {
    super(service.scope, getLogicalName(CronAggregate.name));

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
