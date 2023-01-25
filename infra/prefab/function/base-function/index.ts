import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { ApiConfig, ApiInterface, TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';

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

  constructor(service: Service, params: BaseHandlerParams & BaseFunctionParams) {
    super(service, getLogicalName(BaseFunction.name, params.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_16_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, service.props),
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
