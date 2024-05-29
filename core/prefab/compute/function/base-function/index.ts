import { ApiDefinition, ApiInterface, TablePermission } from '@sinapsis-cloud-components/sdk/catalog/api';
import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Alias, Architecture, Runtime, Tracing, Version } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getFunctionEntry } from 'common/naming/get-function-entry';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getShortResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { EventBusPrefab } from 'prefab/integration/event-bus';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';
import { Modifier } from 'common/modifier';
import { LambdaDeploymentConfig, LambdaDeploymentGroup } from 'aws-cdk-lib/aws-codedeploy';

export const FUNCTION_DEFAULT_TIMEOUT = 6;

export type BaseHandlerParams = NodejsFunctionProps & {
  name: ApiDefinition<ApiInterface>['name'];
  modifiers?: Modifier[];
  environment?: Record<string, string>;
  architecture?: Architecture;
  tablePermission?: TablePermission;
  provisionedConcurrentExecutions?: number;
};

export type BaseAggregateParams = {
  baseFunctionFolder?: string;
  baseFunctionString?: string;
  globalConfigs?: NodejsFunctionProps;
  eventBus?: EventBusPrefab;
  tablePrefab?: DynamoTablePrefab;
  modifiers?: Modifier[];
  environment?: Record<string, string>;
  compiled?: true;
  tracingDisabled?: true;
};

export class BaseFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;
  public readonly aliasFunction: Alias;

  constructor(service: Service, params: BaseHandlerParams & BaseAggregateParams) {
    super(service, getLogicalName(BaseFunction.name, params.name));

    const role = new Role(this, getLogicalName('role', params.name), {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
      roleName: getShortResourceName(params.name, service.props),
    });
    role.addManagedPolicy({ managedPolicyArn: 'arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole' });

    const ccEnv = service.props.ephemeralEnvName
      ? `${service.props.ephemeralEnvName}-${service.props.envName}`
      : service.props.envName;

    this.lambdaFunction = new NodejsFunction(this, params.name, {
      runtime: Runtime.NODEJS_18_X,
      logRetention: 30,
      handler: 'handler',
      role,
      tracing: params.tracingDisabled ? Tracing.DISABLED : Tracing.ACTIVE,
      timeout: Duration.seconds(FUNCTION_DEFAULT_TIMEOUT),
      functionName: getShortResourceName(params.name, service.props),
      entry: params.baseFunctionString || getFunctionEntry(params.baseFunctionFolder!, params.name, params.compiled),
      architecture: params.architecture || Architecture.ARM_64,
      ...params.globalConfigs,
      ...params,
      environment: {
        CC_SERVICE: service.props.serviceName,
        CC_ENV: ccEnv,
        CC_LOG_LEVEL: 'error',
        ...params.environment,
      },
    });

    const version = Version.fromVersionArn(this, 'LambdaVersion', this.lambdaFunction.currentVersion.functionArn);

    this.aliasFunction = new Alias(this, 'LambdaAlias', {
      aliasName: service.props.envName,
      version,
      provisionedConcurrentExecutions: params.provisionedConcurrentExecutions || 0,
    });

    this.lambdaFunction.addEnvironment('CC_FUNCTION_TIMEOUT', this.lambdaFunction.timeout!.toSeconds().toString());
    if (!params.tracingDisabled) this.lambdaFunction.addEnvironment('CC_TRACING', 'true');

    if (this.lambdaFunction.isBoundToVpc) {
      role.addToPolicy(
        new PolicyStatement({
          actions: [
            'ec2:DescribeNetworkInterfaces',
            'ec2:CreateNetworkInterface',
            'ec2:DeleteNetworkInterface',
            'ec2:DescribeInstances',
            'ec2:AttachNetworkInterface',
          ],
          resources: ['*'],
        })
      );
    }

    params.modifiers?.map((fn) => fn(this.lambdaFunction));

    DynamoTablePrefab.addTable(this.lambdaFunction, params.tablePrefab, params.tablePermission);
    EventBusPrefab.addBus(this.lambdaFunction, params.eventBus?.bus);
  }
}
