// import { Duration } from 'aws-cdk-lib';
// import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
// import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

// import { GlobalProps } from '../../../config/config-type';
// import { awsApi } from './catalog';

// export type BaseCrudParams = GlobalServiceDependencies;

// export class AwsConnector extends Service<GlobalProps, BaseCrudParams> {
//   public readonly apiAggregate: ApiAggregate;
//   public readonly accountsTable: ServiceTable;

//   constructor(scope: Construct, globalProps: GlobalProps, params: BaseCrudParams) {
//     super(scope, AwsConnector.name, globalProps, { params });

//     this.accountsTable = new ServiceTable(this, { tableName: 'accounts' });

//     this.apiAggregate = new ApiAggregate(this, {
//       basePath: 'aws',
//       baseFunctionFolder: __dirname,
//       eventBus: this.props.customEventBus.bus,
//       cdnApi: this.props.cdnApi,
//       authPool: this.props.identity.authPool,
//       autoEventsEnabled: true,
//       handlers: {
//         create: {
//           ...awsApi.userCreate.config,
//           timeout: Duration.seconds(25),
//           environment: {
//             API_URL: getDomain(this.props.subdomain.api, this.props),
//             MEDIA_URL: getDomain(this.props.subdomain.media, this.props, true),
//           },
//           modifiers: [customModifier.iamFunction()],
//         },
//         delete: {
//           ...awsApi.userDelete.config,
//           timeout: Duration.seconds(25),
//           modifiers: [customModifier.iamFunction()],
//         },
//         update: {
//           ...awsApi.userUpdate.config,
//           timeout: Duration.seconds(25),
//           modifiers: [customModifier.iamFunction()],
//         },
//         list: awsApi.userList.config,
//         get: awsApi.userGet.config,
//         getTemp: awsApi.userGetTempCredentials.config,
//         accountConnect: {
//           ...awsApi.landingCreate.definition,
//           timeout: Duration.seconds(25),
//           environment: { ROOT_ACCOUNT_ID: this.account },
//           modifiers: [
//             customModifier.iamFunction(),
//             customModifier.stsRole(),
//             this.accountsTable.useMod('ACCOUNT_TABLE', [ServiceTable.modifier.writer]),
//           ],
//         },
//         accountCreate: {
//           ...awsApi.accountCreate.config,
//           timeout: Duration.seconds(25),
//           environment: { ROOT_ACCOUNT_ID: this.account },
//           modifiers: [
//             customModifier.orgFunction(),
//             customModifier.stsRole(),
//             customModifier.iamFunction(),
//             this.accountsTable.useMod('ACCOUNT_TABLE', [ServiceTable.modifier.reader, ServiceTable.modifier.writer]),
//           ],
//         },
//         accountList: {
//           ...awsApi.accountList.config,
//           modifiers: [this.accountsTable.useMod('ACCOUNT_TABLE', [ServiceTable.modifier.reader])],
//         },
//         accountGet: {
//           ...awsApi.accountGet.config,
//           modifiers: [this.accountsTable.useMod('ACCOUNT_TABLE', [ServiceTable.modifier.reader])],
//         },
//       },
//     });
//   }
// }

// export const customModifier = {
//   stsRole: (): ((lambda: NodejsFunction) => void) => {
//     return (lambda: NodejsFunction): void => {
//       lambda.role?.addToPrincipalPolicy(
//         new PolicyStatement({
//           actions: ['sts:AssumeRole'],
//           resources: ['*'],
//         })
//       );
//     };
//   },
//   orgFunction: (): ((lambda: NodejsFunction) => void) => {
//     return (lambda: NodejsFunction): void => {
//       lambda.role?.addToPrincipalPolicy(
//         new PolicyStatement({
//           actions: ['organizations:CreateAccount', 'organizations:DescribeCreateAccountStatus'],
//           resources: ['*'],
//         })
//       );
//     };
//   },
//   iamFunction: (): ((lambda: NodejsFunction) => void) => {
//     return (lambda: NodejsFunction): void => {
//       lambda.role?.addToPrincipalPolicy(
//         new PolicyStatement({
//           actions: [
//             'iam:CreateRole',
//             'iam:AttachRolePolicy',
//             'iam:CreateLoginProfile',
//             'iam:AddUserToGroup',
//             'iam:CreateUser',
//             'iam:CreateAccessKey',
//             'iam:DeleteUser',
//             'iam:DeleteAccessKey',
//             'iam:DeleteLoginProfile',
//             'iam:ListGroupsForUser',
//             'iam:RemoveUserFromGroup',
//             'iam:ListAttachedUserPolicies',
//             'iam:DetachUserPolicy',
//           ],
//           resources: ['*'],
//         })
//       );
//     };
//   },
// };
