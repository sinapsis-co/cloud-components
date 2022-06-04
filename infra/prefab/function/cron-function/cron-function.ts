import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { CronOptions, Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type CronHandlerProps = NodejsFunctionProps & {
  name: string;
  cronOptions: CronOptions;
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
  modifiers?: ((lambda: NodejsFunction) => any)[];
};

export type CronFunctionProps = CronHandlerProps & {
  baseFunctionFolder: string;
  eventBus?: CustomEventBusParams;
  table?: Table;
  compiled?: true;
};

export class CronFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: CronFunctionProps) {
    super(scope, getLogicalName(CronFunction.name, params.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_14_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      environment: params.environment || {},
      ...params,
    });

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    new Rule(scope, 'EventProcessorRule', {
      schedule: Schedule.cron(params.cronOptions),
      targets: [new LambdaFunction(this.lambdaFunction)],
    });

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
