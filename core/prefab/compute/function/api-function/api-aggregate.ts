import { TableBuilder } from '@sinapsis-co/cc-sdk/integration/database/dynamo/table-builder';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import { ApiHttpPrefab } from 'prefab/gateway/api/api-http';
import { ApiRestPrefab } from 'prefab/gateway/api/api-rest';
import { CdnApiPrefab } from 'prefab/gateway/cdn-api';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';

import { BaseFunctionParams } from '../base-function';
import { ApiFunction, ApiHandlerParams } from './api-function';

export type ApiAuthPoolParams = {
  userPool?: UserPool;
  userPoolClient?: UserPoolClient;
};

export type ApiAggregateParams<
  HandlerName extends string = string,
  TableB extends TableBuilder = TableBuilder
> = BaseFunctionParams & {
  basePath: string;
  handlers: Record<HandlerName, ApiHandlerParams>;
  cdnApiPrefab: CdnApiPrefab;
  authPool?: ApiAuthPoolParams;
  customAuthorizerHandler?: IFunction;
  useRestApi?: true;
  tableBuilder?: TableB;
};

export class ApiAggregate<HandlerName extends string = string> extends Construct {
  public readonly apiPrefab: ApiRestPrefab | ApiHttpPrefab;
  public readonly tablePrefab?: DynamoTablePrefab;
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(service: Service, params: ApiAggregateParams) {
    super(service, getLogicalName('ApiAggregate'));

    if (params.useRestApi) {
      this.apiPrefab = new ApiRestPrefab(service, {
        ...params,
        ...params.authPool,
        customAuthorizerHandler: params.customAuthorizerHandler,
      });
    } else {
      this.apiPrefab = new ApiHttpPrefab(service, {
        ...params,
        ...params.authPool,
        customAuthorizerHandler: params.customAuthorizerHandler,
      });
    }

    if (params.tableBuilder) this.tablePrefab = new DynamoTablePrefab(service, params.tableBuilder);

    Object.keys(params.handlers).forEach((handler: string) => {
      if (params.basePath !== params.handlers[handler].basePath)
        throw new SynthError(
          `[ApiService] Invalid basePath: '${params.handlers[handler].basePath}' in '${handler}' function.`,
          service.props
        );
      this.handlers[handler] = new ApiFunction(service, {
        ...params,
        ...params.handlers[handler],
        tablePrefab: this.tablePrefab,
        apiPrefab: this.apiPrefab,
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: {
          ...params.environment,
          ...params.handlers[handler].environment,
        },
      }).lambdaFunction;
    });
  }
}