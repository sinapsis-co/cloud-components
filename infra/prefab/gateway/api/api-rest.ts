import { CfnOutput, Fn } from 'aws-cdk-lib';
import { Cors, IAuthorizer, Resource, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { UserPool } from 'aws-cdk-lib/aws-cognito';
import { IFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { CdnApiPrefab } from '../cdn-api';

export type ApiRestParams = {
  basePath: string;
  cdnApiPrefab: CdnApiPrefab;
  userPool?: UserPool;
  customAuthorizerHandler?: IFunction;
};

export class ApiRestPrefab extends Construct {
  public readonly api: RestApi;
  public readonly authorizer: IAuthorizer;
  public readonly basePath: Resource;

  constructor(service: Service, params: ApiRestParams) {
    super(service, getLogicalName(ApiRestPrefab.name));

    // if (params.userPool) {
    //   this.authorizer = new CognitoUserPoolsAuthorizer(this, 'Authorizer', {
    //     cognitoUserPools: [params.userPool],
    //   });
    // }
    // responseTypes: [HttpLambdaResponseType.SIMPLE],

    // if (params.customAuthorizerHandler) {
    //   this.authorizer = new RequestAuthorizer(this, 'LambdaAuthorizer', {
    //     identitySources: ['$request.header.Authorization'],
    //     handler: params.customAuthorizerHandler,
    //   });
    // }

    this.api = new RestApi(this, 'RestApi', {
      restApiName: getResourceName('', service.props),
      deploy: true,
      deployOptions: {
        tracingEnabled: true,
        stageName: 'default',
      },
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
      },
    });

    const apiUrl: string = Fn.join('', [
      this.api.restApiId,
      '.execute-api.',
      service.props.regionName,
      '.amazonaws.com',
    ]);

    this.basePath = this.api.root.resourceForPath(params.basePath);

    params.cdnApiPrefab.addApiGateway(params.basePath, apiUrl, {
      originPath: `/${this.api.deploymentStage.stageName}`,
    });

    new CfnOutput(this, 'RestApiUrl', { value: apiUrl });
  }
  // public addPath(params: {
  //   basePath: string;
  //   path: string;
  //   method: ApiConfig<ApiInterface>['method'];
  //   isPublic?: true;
  //   lambdaFunction: IFunction;
  // }): void {
  //   // const path = params.path === '/' ? '' : params.path;
  //   // let currentPath = this.basePath;
  //   // if(path === '/')
  //   // if (path) currentPath = currentPath.addResource(path);
  //   // if (path !== '/')
  //   // currentPath = params.path.split('/').reduce((memo, att) => {
  //   //   if (att) {
  //   //     if (this.paths[att]) return this.paths[att];
  //   //     this.paths[att] = memo.addResource(att);
  //   //     memo = this.paths[att];
  //   //     memo.resourceForPath
  //   //     console.log(att, memo.path);
  //   //   }

  //   //   return memo;
  //   // }, this.basePath);
  //   // console.log(params.path, params.method, currentPath.path);

  //   const currentPath = this.basePath.resourceForPath(`${this.basePath}${params.path}`);

  //   currentPath.addMethod(params.method, new LambdaIntegration(params.lambdaFunction), {
  //     operationName: params.lambdaFunction.functionName,
  //     ...(params.isPublic ? {} : { authorizer: this.authorizer }),
  //   });
  // }
}
