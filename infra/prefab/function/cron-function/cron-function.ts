import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { CronOptions, Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { BaseHandlerParams, BaseFunction, BaseFunctionParams } from '../base-function';

export type CronHandlerParams = BaseHandlerParams & {
  cronOptions: CronOptions;
};

export type CronFunctionParams = BaseFunctionParams;

export class CronFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: CronFunctionParams & CronHandlerParams) {
    super(scope, getLogicalName(CronFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(this, props, params).lambdaFunction;

    new Rule(scope, 'EventProcessorRule', {
      schedule: Schedule.cron(params.cronOptions),
      targets: [new LambdaFunction(this.lambdaFunction)],
    });
  }
}
