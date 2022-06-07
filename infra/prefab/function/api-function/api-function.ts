import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { ApiInterface, ApiConfig } from '@sinapsis-co/cc-platform-v2/catalog/api';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { BaseFunction, BaseFunctionParams, BaseHandlerParams } from '../base-function';
import { Service } from '../../../common/service';

export type ApiHandlerParams = BaseHandlerParams & {
  basePath: ApiConfig<ApiInterface>['basePath'];
  path: ApiConfig<ApiInterface>['path'];
  method: ApiConfig<ApiInterface>['method'];
  isPublic?: ApiConfig<ApiInterface>['isPublic'];
};

export type ApiFunctionParams = BaseFunctionParams & {
  api: HttpApi;
  authorizer?: HttpUserPoolAuthorizer;
};

export class ApiFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: ApiHandlerParams & ApiFunctionParams) {
    super(service, getLogicalName(ApiFunction.name, params.name));

    this.lambdaFunction = new BaseFunction(service, params).lambdaFunction;

    const path = params.path === '/' ? '' : params.path;
    params.api.addRoutes({
      path: `/${params.basePath}${path}`,
      methods: [params.method as HttpMethod],
      integration: new HttpLambdaIntegration(ApiFunction.name, this.lambdaFunction),
      ...(params.isPublic ? {} : { authorizer: params.authorizer }),
    });
  }
}
