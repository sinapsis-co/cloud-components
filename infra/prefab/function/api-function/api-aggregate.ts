import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import { Distribution, BehaviorOptions } from 'aws-cdk-lib/aws-cloudfront';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { Table } from 'aws-cdk-lib/aws-dynamodb';

import { BaseServiceProps } from '../../../common/synth/props-types';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { ServiceTable, ServiceTableParams } from '../../table/dynamo-table';
import { ApiRest } from '../../api/api-rest';

import { ApiFunction, ApiFunctionParams, ApiHandlerParams } from './api-function';
import { SynthError } from '../../../common/synth/synth-error';
import { HttpOriginProps } from 'aws-cdk-lib/aws-cloudfront-origins';

export type ApiCdnApiParams = {
  distribution: Distribution;
  behaviorOptions: Omit<BehaviorOptions, 'origin'>;
  originOptions?: HttpOriginProps;
};
export type ApiAuthPoolParams = {
  userPool?: UserPool;
  userPoolClient?: UserPoolClient;
};

export type ApiAggregateParams<HandlerName extends string = string> = ApiFunctionParams & {
  basePath: string;
  handlers: Record<HandlerName, ApiHandlerParams>;
  cdnApi: ApiCdnApiParams;
  authPool?: ApiAuthPoolParams;
  tableOptions?: ServiceTableParams;
  skipTable?: true;
};

export class ApiAggregate<HandlerName extends string = string> extends Construct {
  public readonly api: HttpApi;
  public readonly table?: Table;
  public readonly authorizer: HttpUserPoolAuthorizer;
  public readonly handlers: Record<HandlerName, NodejsFunction> = {} as Record<HandlerName, NodejsFunction>;

  constructor(scope: Construct, props: BaseServiceProps, params: ApiAggregateParams) {
    super(scope, getLogicalName('ApiAggregate'));

    const apiRest = new ApiRest(this, props, { ...params, ...params.cdnApi, ...params.authPool });

    this.api = apiRest.api;
    this.authorizer = apiRest.authorizer;

    if (!params.skipTable) {
      const serviceTable = new ServiceTable(this, props, { tableName: params.basePath, ...params });
      this.table = serviceTable.table;
    }

    Object.keys(params.handlers).forEach((handler: string) => {
      if (params.basePath !== params.handlers[handler].basePath)
        throw new SynthError(
          `[ApiService] Invalid basePath: '${params.handlers[handler].basePath}' in '${handler}' function.`,
          props
        );
      this.handlers[handler] = new ApiFunction(this, props, {
        ...params,
        ...params.handlers[handler],
        table: this.table,
        api: this.api,
        authorizer: this.authorizer,
        modifiers: [...(params.modifiers || []), ...(params.handlers[handler].modifiers || [])],
        environment: { ...params.environment, ...params.handlers[handler].environment },
      }).lambdaFunction;
    });
  }
}
