import { HttpApi, IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { ApiHttpPrefab } from '../../../gateway/api/api-http';
import { DynamoTablePrefab, ServiceTableParams } from '../../../storage/dynamo/table';

import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Service } from '../../../../common/service';
import { SynthError } from '../../../../common/synth/synth-error';
import { CdnApiPrefab } from '../../../gateway/cdn-api';
import { BaseFunctionParams } from '../base-function';
import { ApiFunction, ApiHandlerParams } from './api-function';

export type ApiAuthPoolParams = {
  userPool?: UserPool;
  userPoolClient?: UserPoolClient;
};

export type ApiAggregateParams<HandlerName extends string = string> = BaseFunctionParams & {
  basePath: string;
  handlers: Record<HandlerName, ApiHandlerParams>;
  cdnApiPrefab: CdnApiPrefab;
  authPool?: ApiAuthPoolParams;
  tableOptions?: Omit<ServiceTableParams, 'tableName'>;
  autoEventsEnabled?: true;
  customAuthorizerHandler?: IFunction;
  skipTable?: true;
};

export class ApiAggregate<HandlerName extends string = string> extends Construct {
  public readonly api: HttpApi;
  public readonly table?: Table;
  public readonly authorizer: IHttpRouteAuthorizer;
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: ApiAggregateParams) {
    super(service, getLogicalName('ApiAggregate'));

    if (params.autoEventsEnabled && !params.eventBus)
      throw new SynthError('eventBus is needed when autoEventsEnabled is true', service.props);

    const apiRest = new ApiHttpPrefab(service, {
      ...params,
      ...params.authPool,
      customAuthorizerHandler: params.customAuthorizerHandler,
    });

    this.api = apiRest.api;
    this.authorizer = apiRest.authorizer;

    if (!params.skipTable) {
      const serviceTable = new DynamoTablePrefab(service, { ...params.tableOptions, tableName: params.basePath });
      this.table = serviceTable.table;
    }

    Object.keys(params.handlers).forEach((handler: string) => {
      if (params.basePath !== params.handlers[handler].basePath)
        throw new SynthError(
          `[ApiService] Invalid basePath: '${params.handlers[handler].basePath}' in '${handler}' function.`,
          service.props
        );
      this.handlers[handler] = new ApiFunction(service, {
        ...params,
        ...params.handlers[handler],
        table: this.table,
        api: this.api,
        authorizer: this.authorizer,
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: {
          ...(params.autoEventsEnabled ? { AUTO_EVENTS: 'true' } : {}),
          ...params.environment,
          ...params.handlers[handler].environment,
        },
      }).lambdaFunction;
    });
  }
}
