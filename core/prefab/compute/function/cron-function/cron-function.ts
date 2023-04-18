import { CronOptions, Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type CronHandlerParams = BaseHandlerParams & {
  cronOptions: CronOptions;
};

export type CronFunctionParams = BaseFunctionParams;

export class CronFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: CronFunctionParams & CronHandlerParams) {
    super(service, getLogicalName(CronFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'CRON' },
    }).lambdaFunction;

    new Rule(service, getLogicalName('EventProcessorRule', params.name), {
      schedule: Schedule.cron(params.cronOptions),
      targets: [new LambdaFunction(this.lambdaFunction)],
    });
  }
}
