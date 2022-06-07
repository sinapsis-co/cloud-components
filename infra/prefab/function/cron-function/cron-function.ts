import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CronOptions, Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';
import { Service } from '../../../common/service';

export type CronHandlerParams = BaseHandlerParams & {
  cronOptions: CronOptions;
};

export type CronFunctionParams = BaseFunctionParams;

export class CronFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: CronFunctionParams & CronHandlerParams) {
    super(service, getLogicalName(CronFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    new Rule(service, 'EventProcessorRule', {
      schedule: Schedule.cron(params.cronOptions),
      targets: [new LambdaFunction(this.lambdaFunction)],
    });
  }
}
