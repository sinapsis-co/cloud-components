import { ApiConfig, ApiInterface, TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getFunctionEntry } from '../../../../common/naming/get-function-entry';
import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { getShortResourceName } from '../../../../common/naming/get-resource-name';
import { Service } from '../../../../common/service';
import { EventBusPrefab } from '../../../integration/event-bus';
import { DynamoTablePrefab } from '../../../storage/dynamo/table';

export type BaseHandlerParams = NodejsFunctionProps & {
  name: ApiConfig<ApiInterface>['name'];
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  architecture?: Architecture;
  tablePermission?: TablePermission;
};

export type BaseFunctionParams = {
  baseFunctionFolder: string;
  eventBus?: EventBusPrefab;
  table?: Table;
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  compiled?: true;
};

export class BaseFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: BaseHandlerParams & BaseFunctionParams) {
    super(service, getLogicalName(BaseFunction.name, params.name));

    const role = new Role(this, getLogicalName('role', params.name), {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      roleName: getShortResourceName(params.name, service.props),
    });
    role.addManagedPolicy({ managedPolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole' });

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_16_X,
      logRetention: 30,
      handler: 'handler',
      role,
      tracing: Tracing.ACTIVE,
      functionName: getShortResourceName(params.name, service.props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      architecture: params.architecture || Architecture.ARM_64,
      environment: params.environment || {},
      ...params,
    });

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    DynamoTablePrefab.addTable(this.lambdaFunction, params.table, params.tablePermission);
    EventBusPrefab.addBus(this.lambdaFunction, params.eventBus?.bus);
  }
}
