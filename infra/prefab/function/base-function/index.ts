import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { ApiInterface, ApiConfig, TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';

export type BaseHandlerParams = NodejsFunctionProps & {
  name: ApiConfig<ApiInterface>['name'];
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  architecture?: Architecture;
  tablePermission?: TablePermission;
};

export type BaseFunctionParams = {
  baseFunctionFolder: string;
  eventBus?: CustomEventBusParams;
  table?: Table;
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  compiled?: true;
};

export class BaseFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: BaseHandlerParams & BaseFunctionParams) {
    super(scope, getLogicalName(BaseFunction.name, params.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_16_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      architecture: params.architecture || Architecture.ARM_64,
      environment: params.environment || {},
      ...params,
    });

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
