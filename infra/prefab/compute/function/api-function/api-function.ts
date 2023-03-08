import { HttpApi, HttpMethod, IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { ApiConfig, ApiInterface } from '@sinapsis-co/cc-platform-v2/catalog/api';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../../common/naming/get-logical-name';
import { Service } from '../../../../common/service';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';

export type ApiHandlerParams = BaseHandlerParams & {
  basePath: ApiConfig<ApiInterface>['basePath'];
  path: ApiConfig<ApiInterface>['path'];
  method: ApiConfig<ApiInterface>['method'];
  isPublic?: ApiConfig<ApiInterface>['isPublic'];
};

export type ApiFunctionParams = BaseFunctionParams & {
  api: HttpApi;
  authorizer?: IHttpRouteAuthorizer;
};

export class ApiFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: ApiHandlerParams & ApiFunctionParams) {
    super(service, getLogicalName(ApiFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'API' },
    }).lambdaFunction;

    const path = params.path === '/' ? '' : params.path;
    params.api.addRoutes({
      path: `/${params.basePath}${path}`,
      methods: [params.method as HttpMethod],
      integration: new HttpLambdaIntegration(ApiFunction.name, this.lambdaFunction),
      ...(params.isPublic ? {} : { authorizer: params.authorizer }),
    });
  }
}
