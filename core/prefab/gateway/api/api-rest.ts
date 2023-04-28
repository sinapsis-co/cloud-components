import { CfnOutput, Fn } from 'aws-cdk-lib';
import * as awsApigateway from 'aws-cdk-lib/aws-apigateway';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { CdnApiPrefab } from 'prefab/gateway/cdn-api';

export type ApiRestPrefabParams = {
  basePath: string;
  cdnApiPrefab?: CdnApiPrefab;
  userPool?: UserPool;
  customAuthorizerHandler?: IFunction;
  stageName?: string;
  stageVariables?: Record<string, string>;
  httpProxyIntegrationUrl?: string;
  apiKeyRequired?: boolean;
};

export class ApiRestPrefab extends Construct {
  public readonly api: awsApigateway.RestApi;
  public readonly authorizer: awsApigateway.IAuthorizer;
  public readonly basePath: awsApigateway.Resource;

  constructor(service: Service, params: ApiRestPrefabParams) {
    super(service, getLogicalName(ApiRestPrefab.name));

    if (params.userPool) {
      this.authorizer = new awsApigateway.CognitoUserPoolsAuthorizer(this, 'Authorizer', {
        cognitoUserPools: [params.userPool],
      });
    }

    if (params.customAuthorizerHandler) {
      this.authorizer = new awsApigateway.RequestAuthorizer(this, 'LambdaAuthorizer', {
        identitySources: ['$request.header.Authorization'],
        handler: params.customAuthorizerHandler,
      });
    }

    this.api = new awsApigateway.RestApi(this, 'RestApi', {
      restApiName: getResourceName('', service.props),
      deploy: true,
      deployOptions: {
        tracingEnabled: true,
        stageName: params.stageName || 'default',
        variables: params.stageVariables,
      },
      defaultCorsPreflightOptions: {
        allowOrigins: awsApigateway.Cors.ALL_ORIGINS,
      },
    });

    const apiUrl: string = Fn.join('', [
      this.api.restApiId,
      '.execute-api.',
      service.props.regionName,
      '.amazonaws.com',
    ]);

    this.basePath = this.api.root.resourceForPath(params.basePath);

    if (params.httpProxyIntegrationUrl) {
      this.basePath.addProxy({ anyMethod: false }).addMethod(
        'ANY',
        new awsApigateway.HttpIntegration(params.httpProxyIntegrationUrl, {
          httpMethod: 'ANY',
          proxy: true,
          options: { requestParameters: { 'integration.request.path.proxy': 'method.request.path.proxy' } },
        }),
        { requestParameters: { 'method.request.path.proxy': true }, apiKeyRequired: params.apiKeyRequired }
      );
    }

    if (params.cdnApiPrefab)
      params.cdnApiPrefab.addApiGateway(params.basePath, apiUrl, {
        originPath: `/${this.api.deploymentStage.stageName}`,
      });

    new CfnOutput(this, 'RestApiUrl', { value: apiUrl });
  }
}
