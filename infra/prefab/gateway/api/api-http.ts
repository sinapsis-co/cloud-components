import { CorsHttpMethod, HttpApi, IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha';
import {
  HttpLambdaAuthorizer,
  HttpLambdaResponseType,
  HttpUserPoolAuthorizer,
} from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { CfnOutput, Duration, Fn } from 'aws-cdk-lib';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { CdnApiPrefab } from '../cdn-api';

export type ApiHttpParams = {
  basePath: string;
  cdnApiPrefab: CdnApiPrefab;
  userPool?: UserPool;
  userPoolClient?: UserPoolClient;
  customAuthorizerHandler?: IFunction;
};

export class ApiHttpPrefab extends Construct {
  public readonly api: HttpApi;
  public readonly authorizer: IHttpRouteAuthorizer;

  constructor(service: Service, params: ApiHttpParams) {
    super(service, getLogicalName(ApiHttpPrefab.name));

    if (params.userPool && params.userPoolClient)
      this.authorizer = new HttpUserPoolAuthorizer('Authorizer', params.userPool, {
        userPoolClients: [params.userPoolClient],
        identitySource: ['$request.header.Authorization'],
      });

    if (params.customAuthorizerHandler)
      this.authorizer = new HttpLambdaAuthorizer('LambdaAuthorizer', params.customAuthorizerHandler, {
        responseTypes: [HttpLambdaResponseType.SIMPLE],
      });

    this.api = new HttpApi(this, 'HttpApi', {
      apiName: getResourceName('', service.props),
      corsPreflight: {
        allowOrigins: ['*'],
        allowMethods: [CorsHttpMethod.ANY],
        allowHeaders: ['*'],
        maxAge: Duration.seconds(10),
      },
    });

    const apiUrl: string = Fn.join('', [this.api.apiId, '.execute-api.', service.props.regionName, '.amazonaws.com']);

    params.cdnApiPrefab.addApiGateway(params.basePath, apiUrl);

    new CfnOutput(this, 'ApiUrl', { value: apiUrl });
  }
}
