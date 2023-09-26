import { CfnOutput, Fn } from 'aws-cdk-lib';
import * as awsCognito from 'aws-cdk-lib/aws-cognito';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { UserPoolDomainTarget } from 'aws-cdk-lib/aws-route53-targets';
import { getDomain } from 'common/naming/get-domain';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { Construct } from 'constructs';

export type AuthPoolParams = {
  userPool?: Partial<awsCognito.UserPoolProps>;
  userPoolClient?: Partial<awsCognito.UserPoolClientProps>;
  userPoolDomain?: Partial<awsCognito.UserPoolDomainProps>;
  emailConfiguration?: awsCognito.CfnUserPool.EmailConfigurationProperty;
  callbackUrl?: string;
  passwordPolicy?: awsCognito.PasswordPolicy;
};

export class CognitoAuthPoolPrefab extends Construct {
  public readonly userPool: awsCognito.UserPool;
  public readonly userPoolClient: awsCognito.UserPoolClient;
  public readonly userPoolDomain: awsCognito.UserPoolDomain;
  public readonly frontendRefs: Record<string, string>;

  /**
   * Creates a Cognito UserPool
   *
   * @param service - The instance of Service where the prefab will be deployed
   * @param params - Prefab params
   * @returns CognitoAuthPoolPrefab instance
   */
  constructor(service: Service, params: AuthPoolParams) {
    super(service, getLogicalName(CognitoAuthPoolPrefab.name));
    //
    const callbackUrl = params.callbackUrl || getDomain('app', service.props, true);

    const defaultUserPoolProps: awsCognito.UserPoolProps = {
      userPoolName: getResourceName('', service.props),
      accountRecovery: awsCognito.AccountRecovery.EMAIL_ONLY,
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      signInCaseSensitive: false,
      passwordPolicy: params.passwordPolicy || { minLength: 8, requireDigits: true },
    };

    const defaultEmailConfiguration = { emailSendingAccount: 'COGNITO_DEFAULT' };

    const userPool = new awsCognito.UserPool(this, 'UserPool', { ...defaultUserPoolProps, ...params.userPool });

    const cfnUserPool = userPool.node.defaultChild as awsCognito.CfnUserPool;
    cfnUserPool.emailConfiguration = params.emailConfiguration || defaultEmailConfiguration;

    const defaultUserClientProps: Partial<awsCognito.UserPoolClientProps> = {
      userPoolClientName: getResourceName('', service.props),
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

    const userPoolClient = new awsCognito.UserPoolClient(this, 'UserPoolClient', {
      userPool,
      ...defaultUserClientProps,
      ...params.userPoolClient,
    });

    const userPoolDomain = new awsCognito.UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      ...(!service.props.ephemeralEnvName && params.userPoolDomain
        ? params.userPoolDomain
        : {
            cognitoDomain: {
              domainPrefix: (
                params.userPoolDomain?.cognitoDomain?.domainPrefix || getDomain('auth', service.props)
              ).replace(/\./g, '-'),
            },
          }),
    });

    if (params.userPoolDomain) {
      const hostedZone = HostedZone.fromLookup(this, 'HostedZoneEnvDns', { domainName: getDomain('', service.props) });
      const record = new ARecord(service, 'Record', {
        zone: hostedZone,
        target: RecordTarget.fromAlias(new UserPoolDomainTarget(userPoolDomain)),
        recordName: params.userPoolDomain.customDomain?.domainName,
      });
      record.node.addDependency(userPoolDomain);
    }

    const userPoolId = userPool.userPoolId;
    const userPoolClientId = userPoolClient.userPoolClientId;
    const userPoolDomainUrl = Fn.join('', ['https://', userPoolDomain.domainName, '.auth.us-east-1.amazoncognito.com']);
    const userPoolRegion = service.props.regionName;

    new CfnOutput(this, 'UserPoolId', { value: userPoolId });
    new CfnOutput(this, 'UserPoolClientId', { value: userPoolClientId });
    new CfnOutput(this, 'UserPoolDomainUrl', { value: userPoolDomainUrl });
    new CfnOutput(this, 'UserPoolRegion', { value: userPoolRegion });

    this.userPool = userPool;
    this.userPoolClient = userPoolClient;
    this.userPoolDomain = userPoolDomain;
    this.frontendRefs = {
      REACT_APP_COGNITO_USER_POOL_ID: userPoolId,
      REACT_APP_COGNITO_WEB_CLIENT_ID: userPoolClientId,
      REACT_APP_COGNITO_DOMAIN: userPoolDomainUrl,
      REACT_APP_COGNITO_REGION: userPoolRegion,
    };
  }

  public useMod(mods: ((userPool: awsCognito.UserPool) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment('USER_POOL_ID', this.userPool.userPoolId);
      lambda.addEnvironment('USER_POOL_CLIENT_ID', this.userPoolClient.userPoolClientId);
      mods.map((fn) => fn(this.userPool)(lambda));
    };
  }

  public static modifier = {
    updateUserAtt: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: [
              'cognito-idp:AdminUpdateUserAttributes',
              'cognito-idp:AdminDisableUser',
              'cognito-idp:AdminEnableUser',
            ],
            resources: ['*'],
          })
        );
      };
    },
    deleteUser: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: ['cognito-idp:AdminDeleteUser'],
            resources: ['*'],
          })
        );
      };
    },
    authUser: (): ((lambda: NodejsFunction) => void) => {
      return (lambda: NodejsFunction): void => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: ['cognito-idp:AdminConfirmSignUp', 'cognito-idp:SignUp', 'cognito-idp:InitiateAuth'],
            resources: ['*'],
          })
        );
      };
    },
  };
}
