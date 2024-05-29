import { Modifier } from 'common/modifier';
import { getServiceName } from 'common/naming/get-service-name';
import { SynthError } from 'common/synth/synth-error';
import { CfnOutput, Duration, Fn } from 'aws-cdk-lib';
import * as awsCognito from 'aws-cdk-lib/aws-cognito';
import { Effect, Policy, PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Key, KeySpec } from 'aws-cdk-lib/aws-kms';
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
  emailConfiguration?: awsCognito.UserPoolSESOptions;
  callbackUrl?: string;
  enableCustomSender?: boolean;
  socialLogin?: {
    google?: Omit<awsCognito.UserPoolIdentityProviderGoogleProps, 'userPool'>;
    facebook?: awsCognito.UserPoolIdentityProviderFacebookProps;
    apple?: awsCognito.UserPoolIdentityProviderAppleProps;
  };
};

export class CognitoAuthPoolPrefab extends Construct {
  public readonly userPool: awsCognito.UserPool;
  public readonly userPoolClient: awsCognito.UserPoolClient;
  public readonly userPoolDomain: awsCognito.UserPoolDomain;
  public readonly frontendRefs: Record<string, string>;
  public readonly kmsKey: Key | undefined;
  public readonly props;
  // public readonly googleProvider: awsCognito.UserPoolIdentityProviderGoogle | undefined;

  /**
   * Creates a Cognito UserPool
   *
   * @param service - The instance of Service where the prefab will be deployed
   * @param params - Prefab params
   * @returns CognitoAuthPoolPrefab instance
   */
  constructor(service: Service, params: AuthPoolParams) {
    super(service, getLogicalName(CognitoAuthPoolPrefab.name));

    this.props = service.props;

    //User Pool

    if (params.enableCustomSender) {
      this.kmsKey = new Key(this, getResourceName('kms', service.props), {
        keySpec: KeySpec.SYMMETRIC_DEFAULT,
        alias: getResourceName('kms-alias', service.props),
        enableKeyRotation: false,
      });

      this.kmsKey.addToResourcePolicy(
        new PolicyStatement({
          actions: ['kms:Encrypt'],
          effect: Effect.ALLOW,
          principals: [new ServicePrincipal('cognito-idp.amazonaws.com')],
          resources: ['*'],
        })
      );
    }

    const defaultUserPoolProps: awsCognito.UserPoolProps = {
      userPoolName: getResourceName('', service.props),
      accountRecovery: awsCognito.AccountRecovery.EMAIL_ONLY,
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      signInCaseSensitive: false,
      passwordPolicy: { minLength: 8, requireDigits: true },
      customSenderKmsKey: params.enableCustomSender ? this.kmsKey : undefined,
      email: params.emailConfiguration && awsCognito.UserPoolEmail.withSES(params.emailConfiguration),
    };
    const userPool = new awsCognito.UserPool(this, 'UserPool', { ...defaultUserPoolProps, ...params.userPool });

    // Social Login
    if (params.socialLogin?.google) {
      const googleProvider = new awsCognito.UserPoolIdentityProviderGoogle(this, 'GoogleProvider', {
        userPool: userPool,
        scopes: ['openid', 'email', 'profile'],
        attributeMapping: {
          email: awsCognito.ProviderAttribute.GOOGLE_EMAIL,
          givenName: awsCognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
          familyName: awsCognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
        },
        ...params.socialLogin.google,
      });
      userPool.registerIdentityProvider(googleProvider);
    }
    if (params.socialLogin?.facebook) {
      const facebookProvider = new awsCognito.UserPoolIdentityProviderFacebook(
        this,
        'FacebookProvider',
        params.socialLogin.facebook
      );
      userPool.registerIdentityProvider(facebookProvider);
    }
    if (params.socialLogin?.apple) {
      const appleProvider = new awsCognito.UserPoolIdentityProviderApple(
        this,
        'AppleProvider',
        params.socialLogin.apple
      );
      userPool.registerIdentityProvider(appleProvider);
    }

    // UserPoolClient
    const callbackUrl = params.callbackUrl || getDomain('app', service.props, true);
    const defaultUserClientProps: Partial<awsCognito.UserPoolClientProps> = {
      userPoolClientName: getResourceName('', service.props),
      authFlows: {
        custom: true,
        userSrp: true,
        userPassword: true,
        adminUserPassword: false,
      },
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        callbackUrls: [callbackUrl, ...(service.props.envName === 'dev' ? ['http://localhost:3000'] : [])],
        logoutUrls: [
          `${callbackUrl}/sign-in`,
          ...(service.props.envName === 'dev' ? ['http://localhost:3000/sign-in'] : []),
        ],
      },
      preventUserExistenceErrors: true,
      generateSecret: false,
    };

    const userPoolClient = new awsCognito.UserPoolClient(this, 'UserPoolClient', {
      userPool,
      ...defaultUserClientProps,
      ...params.userPoolClient,
    });

    // UserPoolDomain
    const userPoolDomain = new awsCognito.UserPoolDomain(this, 'UserPoolDomain', {
      userPool,
      ...(params.userPoolDomain
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

    // Attributes and Outputs
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

  // MODS
  public useMod(mods: ((userPool: awsCognito.UserPool) => any)[]): Modifier {
    return (lambda) => {
      lambda.addEnvironment('USER_POOL_ID', this.userPool.userPoolId);
      lambda.addEnvironment('USER_POOL_CLIENT_ID', this.userPoolClient.userPoolClientId);
      mods.map((fn) => fn(this.userPool)(lambda));
    };
  }

  public customSmsSenderMod(): Modifier {
    return (lambda) => {
      if (!this.kmsKey) throw new SynthError('enableCustomSender must be true to use customSmsSenderMod');

      lambda.addEnvironment('KEY_ID', this.kmsKey.keyArn);
      lambda.addEnvironment(
        'KEY_ALIAS',
        `arn:aws:kms:${this.props.regionName}:${this.props.deployTarget['services'].account}:alias/${getServiceName(
          'kms',
          this.props
        )}`
      );

      lambda.role?.addToPrincipalPolicy(
        new PolicyStatement({
          actions: [
            'cognito-idp:AdminConfirmSignUp',
            'cognito-idp:SignUp',
            'cognito-idp:InitiateAuth',
            'cognito-idp:ConfirmSignUp',
            'cognito-idp:ForgotPassword',
            'cognito-idp:ConfirmForgotPassword',
            'cognito-idp:ResendConfirmationCode',
          ],
          resources: ['*'],
        })
      );
      lambda.role?.addToPrincipalPolicy(
        new PolicyStatement({
          actions: ['kms:Decrypt', 'kms:DescribeKey'],
          resources: [this.kmsKey.keyArn],
        })
      );
    };
  }

  public static modifier = {
    updateUserAtt: (): Modifier => {
      return (lambda) => {
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
    deleteUser: (): Modifier => {
      return (lambda) => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: ['cognito-idp:AdminDeleteUser'],
            resources: ['*'],
          })
        );
      };
    },
    preSignUp: (): Modifier => {
      return (lambda) => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: [
              'cognito-idp:AdminLinkProviderForUser',
              'cognito-idp:AdminGetUser',
              'cognito-idp:AdminCreateUser',
              'cognito-idp:AdminSetUserPassword',
              'cognito-idp:AdminUpdateUserAttributes',
            ],
            resources: ['*'],
          })
        );
      };
    },
    authUser: (): Modifier => {
      return (lambda) => {
        lambda.role?.addToPrincipalPolicy(
          new PolicyStatement({
            actions: [
              'cognito-idp:AdminConfirmSignUp',
              'cognito-idp:SignUp',
              'cognito-idp:InitiateAuth',
              'cognito-idp:ConfirmSignUp',
              'cognito-idp:ForgotPassword',
              'cognito-idp:ConfirmForgotPassword',
              'cognito-idp:ResendConfirmationCode',
            ],
            resources: ['*'],
          })
        );
      };
    },
  };
}
