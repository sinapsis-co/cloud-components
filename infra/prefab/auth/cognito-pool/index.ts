import { CfnOutput, Fn } from 'aws-cdk-lib';
import {
  AccountRecovery,
  CfnUserPool,
  PasswordPolicy,
  UserPool,
  UserPoolClient,
  UserPoolClientProps,
  UserPoolDomain,
  UserPoolDomainProps,
  UserPoolProps,
} from 'aws-cdk-lib/aws-cognito';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { UserPoolDomainTarget } from 'aws-cdk-lib/aws-route53-targets';
import { getDomain } from '../../../common/naming/get-domain';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';

export type AuthPoolParams = {
  userPool?: Partial<UserPoolProps>;
  userPoolClient?: Partial<UserPoolClientProps>;
  userPoolDomain?: Partial<UserPoolDomainProps>;
  emailConfiguration?: CfnUserPool.EmailConfigurationProperty;
  callbackUrl?: string;
  passwordPolicy?: PasswordPolicy;
};

export class CognitoAuthPoolPrefab extends Construct {
  public readonly userPool: UserPool;
  public readonly userPoolClient: UserPoolClient;
  public readonly userPoolDomain: UserPoolDomain;
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

    const callbackUrl = params.callbackUrl || getDomain('app', service.props, true);

    const defaultUserPoolProps: UserPoolProps = {
      userPoolName: getResourceName('', service.props),
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

    const userPoolClient = new UserPoolClient(this, 'UserPoolClient', {
      userPool,
      ...defaultUserClientProps,
      ...params.userPoolClient,
    });

    const userPoolDomain = new UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      ...(!service.props.ephemeralEnvName && params.userPoolDomain
        ? params.userPoolDomain
        : { cognitoDomain: { domainPrefix: getDomain('auth', service.props).replace(/\./g, '-') } }),
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

  public useMod(mods: ((userPool: UserPool) => any)[]): (lambda: NodejsFunction) => void {
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
            actions: ['cognito-idp:AdminUpdateUserAttributes'],
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
