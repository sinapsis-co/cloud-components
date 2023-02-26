import { CorsHttpMethod, HttpApi } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { CfnOutput, Duration, Fn } from 'aws-cdk-lib';
import { BehaviorOptions, Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { HttpOrigin, HttpOriginProps } from 'aws-cdk-lib/aws-cloudfront-origins';
import { UserPool, UserPoolClient } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';

export type ApiRestParams = {
  basePath: string;
  distribution: Distribution;
  behaviorOptions: Omit<BehaviorOptions, 'origin'>;
  userPool?: UserPool;
  userPoolClient?: UserPoolClient;
  originOptions?: HttpOriginProps;
};

export class ApiRest extends Construct {
  public readonly api: HttpApi;
  public readonly authorizer: HttpUserPoolAuthorizer;

  constructor(service: Service, params: ApiRestParams) {
    super(service, getLogicalName(ApiRest.name));

    if (params.userPool && params.userPoolClient)
      this.authorizer = new HttpUserPoolAuthorizer('Authorizer', params.userPool, {
        userPoolClients: [params.userPoolClient],
        identitySource: ['$request.header.Authorization'],
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

    const apiUrl = Fn.join('', [this.api.apiId, '.execute-api.', service.props.regionName, '.amazonaws.com']);

    params.distribution.addBehavior(
      `/${params.basePath}*`,
      new HttpOrigin(apiUrl, params.originOptions),
      params.behaviorOptions
    );

    new CfnOutput(this, 'ApiUrl', { value: apiUrl });
  }
}
