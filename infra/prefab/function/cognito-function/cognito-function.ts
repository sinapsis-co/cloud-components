import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { UserPool, UserPoolOperation } from 'aws-cdk-lib/aws-cognito';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';
import { TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

export type CognitoHandlerParams = NodejsFunctionProps & {
  name: string;
  operation: UserPoolOperation;
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
  modifiers?: ((lambda: NodejsFunction) => any)[];
};

export type CognitoFunctionParams = CognitoHandlerParams & {
  baseFunctionFolder: string;
  userPool: UserPool;
  eventBus?: CustomEventBusParams;
  table?: Table;
  compiled?: true;
};

export class CognitoFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: CognitoFunctionParams) {
    super(scope, getLogicalName(CognitoFunction.name));

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

    params.userPool.addTrigger(params.operation, this.lambdaFunction);

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
