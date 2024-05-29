import { ApiDefinition, ApiInterface } from '@sinapsis-cloud-components/sdk/catalog/api';
import { Duration } from 'aws-cdk-lib';
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { HttpMethod } from 'aws-cdk-lib/aws-events';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import { ApiHttpPrefab } from 'prefab/gateway/api/api-http';
import { ApiRestPrefab } from 'prefab/gateway/api/api-rest';

import { BaseFunction, BaseAggregateParams, BaseHandlerParams } from '../base-function';
import { HttpLambdaIntegration } from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import { Version } from 'aws-cdk-lib/aws-lambda';

export type ApiHandlerParams = BaseHandlerParams & {
  basePath: ApiDefinition<ApiInterface>['basePath'];
  path: ApiDefinition<ApiInterface>['path'];
  method: ApiDefinition<ApiInterface>['method'];
  isPublic?: ApiDefinition<ApiInterface>['isPublic'];
  cacheMaxAge?: number;
};

export type ApiFunctionParams = BaseAggregateParams & {
  apiPrefab: ApiRestPrefab | ApiHttpPrefab;
};

export class ApiFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: ApiHandlerParams & ApiFunctionParams) {
    super(service, getLogicalName(ApiFunction.name, params.name));

    const baseFunction = new BaseFunction(service, {
      ...params,
      environment: { ...params.environment, CC_FUNCTION_TYPE: 'API' },
    });

    this.lambdaFunction = baseFunction.lambdaFunction;
    this.lambdaFunction.addEnvironment('CC_CACHE_MAX_AGE', params.cacheMaxAge?.toString() || '10');

    if (this.lambdaFunction.timeout && this.lambdaFunction.timeout.toSeconds() > Duration.seconds(28).toSeconds()) {
      throw new SynthError('Lambda timeout must be less than 28 seconds in ApiFunctions', service.props);
    }

    if (params.apiPrefab instanceof ApiHttpPrefab) {
      const path = params.path === '/' ? '' : params.path;
      params.apiPrefab.api.addRoutes({
        path: `/${params.basePath}${path}`,
        methods: [params.method as HttpMethod],
        integration: new HttpLambdaIntegration(ApiFunction.name, baseFunction.aliasFunction),
        ...(params.isPublic ? {} : { authorizer: params.apiPrefab.authorizer }),
      });
    }
    if (params.apiPrefab instanceof ApiRestPrefab) {
      params.apiPrefab.api.root
        .resourceForPath(`${params.basePath}${params.path}`)
        .addMethod(params.method, new LambdaIntegration(baseFunction.aliasFunction), {
          operationName: this.lambdaFunction.functionName,
          ...(params.isPublic ? {} : { authorizer: params.apiPrefab.authorizer }),
        });
    }
  }
}
