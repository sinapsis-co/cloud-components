import { Construct } from 'constructs';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';

import { ApiInterface, ApiConfig, TablePermission } from '@sinapsis-co/cc-platform-v2/catalog/api';

import { getShortResourceName } from '../../../common/naming/get-resource-name';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseServiceProps } from '../../../common/synth/props-types';
import { CustomEventBusConstruct, CustomEventBusParams } from '../../../services/custom-event-bus';
import { ServiceTable } from '../../table/dynamo-table';
import { getFunctionEntry } from '../../../common/naming/get-function-entry';

export type ApiHandlerParams = NodejsFunctionProps & {
  name: ApiConfig<ApiInterface>['name'];
  basePath: ApiConfig<ApiInterface>['basePath'];
  path: ApiConfig<ApiInterface>['path'];
  method: ApiConfig<ApiInterface>['method'];
  isPublic?: ApiConfig<ApiInterface>['isPublic'];
  environment?: Record<string, string>;
  tablePermission?: TablePermission;
  modifiers?: ((lambda: NodejsFunction) => any)[];
};

export type ApiFunctionParams = ApiHandlerParams & {
  api: HttpApi;
  baseFunctionFolder: string;
  authorizer?: HttpUserPoolAuthorizer;
  eventBus?: CustomEventBusParams;
  table?: Table;
  compiled?: true;
};

export class ApiFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(scope: Construct, props: BaseServiceProps, params: ApiFunctionParams) {
    super(scope, getLogicalName(ApiFunction.name, params.name));

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_14_X,
      logRetention: 30,
      handler: 'handler',
      functionName: getShortResourceName(params.name, props),
      entry: getFunctionEntry(params.baseFunctionFolder, params.name, params.compiled),
      environment: params.environment || {},
      ...params,
    });

    const path = params.path === '/' ? '' : params.path;
    params.api.addRoutes({
      path: `/${params.basePath}${path}`,
      methods: [params.method as HttpMethod],
      integration: new HttpLambdaIntegration(ApiFunction.name, this.lambdaFunction),
      ...(params.isPublic ? {} : { authorizer: params.authorizer }),
    });

    ServiceTable.addTable(this.lambdaFunction, params.table, params.tablePermission);
    CustomEventBusConstruct.addBus(this.lambdaFunction, params.eventBus);
  }
}
