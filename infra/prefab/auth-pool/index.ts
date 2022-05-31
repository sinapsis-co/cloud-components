import { Construct } from 'constructs';
import { CfnOutput, Fn } from 'aws-cdk-lib';
import { UserPoolProps, UserPoolClientProps, UserPoolDomainProps, CfnUserPool } from 'aws-cdk-lib/aws-cognito';
import { PasswordPolicy, UserPool, UserPoolClient, UserPoolDomain, AccountRecovery } from 'aws-cdk-lib/aws-cognito';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

import { getResourceName } from '../../common/naming/get-resource-name';
import { BaseServiceProps } from '../../common/synth/props-types';
import { getLogicalName } from '../../common/naming/get-logical-name';
import { getDomain } from '../../common/naming/get-domain';

export type AuthPoolParams = {
  userPool?: Partial<UserPoolProps>;
  userPoolClient?: Partial<UserPoolClientProps>;
  userPoolDomain?: Partial<UserPoolDomainProps>;
  emailConfiguration?: CfnUserPool.EmailConfigurationProperty;
  callbackUrl?: string;
  passwordPolicy?: PasswordPolicy;
};

export class AuthPool extends Construct {
  public readonly userPool: UserPool;
  public readonly userPoolClient: UserPoolClient;
  public readonly userPoolDomain: UserPoolDomain;
  public readonly frontendRefs: Record<string, string>;

  constructor(scope: Construct, props: BaseServiceProps, params: AuthPoolParams) {
    super(scope, getLogicalName(AuthPool.name));

    const callbackUrl = params.callbackUrl || getDomain('app', props, true);

    const defaultUserPoolProps: UserPoolProps = {
      userPoolName: getResourceName('', props),
      accountRecovery: AccountRecovery.EMAIL_ONLY,
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      passwordPolicy: params.passwordPolicy || { minLength: 8, requireDigits: true },
    };

    const defaultEmailConfiguration = { emailSendingAccount: 'COGNITO_DEFAULT' };

    const userPool = new UserPool(this, 'UserPool', { ...defaultUserPoolProps, ...params.userPool });

    const cfnUserPool = userPool.node.defaultChild as CfnUserPool;
    cfnUserPool.emailConfiguration = params.emailConfiguration || defaultEmailConfiguration;

    const defaultUserClientProps: Partial<UserPoolClientProps> = {
      userPoolClientName: getResourceName('', props),
      authFlows: {
        custom: true,
        userSrp: true,
        userPassword: true,
        adminUserPassword: false,
      },
      preventUserExistenceErrors: true,
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        callbackUrls: [callbackUrl],
        logoutUrls: [callbackUrl],
      },
      generateSecret: false,
      supportedIdentityProviders: [],
    };

    const userPoolClient = new UserPoolClient(this, 'UserPoolClient', {
      userPool,
      ...defaultUserClientProps,
      ...params.userPoolClient,
    });

    const defaultUserPoolDomainProps = { cognitoDomain: { domainPrefix: getResourceName('', props) } };

    const userPoolDomain = new UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      ...defaultUserPoolDomainProps,
      ...params.userPoolDomain,
    });

    this.userPool = userPool;
    this.userPoolClient = userPoolClient;
    this.userPoolDomain = userPoolDomain;
    const userPoolId = userPool.userPoolId;
    const userPoolClientId = userPoolClient.userPoolClientId;

    const userPoolDomainUrl = Fn.join('', ['https://', userPoolDomain.domainName, '.auth.us-east-1.amazoncognito.com']);
    const userPoolRegion = props.regionName;

    new CfnOutput(this, 'UserPoolId', { value: userPoolId });
    new CfnOutput(this, 'UserPoolClientId', { value: userPoolClientId });
    new CfnOutput(this, 'UserPoolDomainUrl', { value: userPoolDomainUrl });
    new CfnOutput(this, 'UserPoolRegion', { value: userPoolRegion });

    this.frontendRefs = {
      REACT_APP_COGNITO_USER_POOL_ID: userPoolId,
      REACT_APP_COGNITO_WEB_CLIENT_ID: userPoolClientId,
      REACT_APP_COGNITO_DOMAIN: userPoolDomainUrl,
      REACT_APP_COGNITO_REGION: userPoolRegion,
    };
  }

  public addCognitoAdminFunction(lambdaFunction: NodejsFunction): void {
    lambdaFunction
      .addEnvironment('USER_POOL_ID', this.userPool.userPoolId)
      .addEnvironment('USER_POOL_CLIENT_ID', this.userPoolClient.userPoolClientId)
      .role?.addToPrincipalPolicy(
        new PolicyStatement({
          actions: [
            'cognito-idp:SignUp',
            'cognito-idp:InitiateAuth',
            'cognito-idp:AdminConfirmSignUp',
            'cognito-idp:AdminUpdateUserAttributes',
            'cognito-idp:AdminDeleteUser',
          ],
          resources: ['*'],
        })
      );
  }
}
