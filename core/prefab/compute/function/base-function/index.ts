import { ApiDefinition, ApiInterface, TablePermission } from '@sinapsis-cloud-components/sdk/catalog/api';
import { Duration } from 'aws-cdk-lib';
import { PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Architecture, Runtime, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

import { getFunctionEntry } from 'common/naming/get-function-entry';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getShortResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { EventBusPrefab } from 'prefab/integration/event-bus';
import { DynamoTablePrefab } from 'prefab/storage/dynamo/table';

export const FUNCTION_DEFAULT_TIMEOUT = 6;

export type BaseHandlerParams = NodejsFunctionProps & {
  name: ApiDefinition<ApiInterface>['name'];
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  architecture?: Architecture;
  tablePermission?: TablePermission;
};

export type BaseFunctionParams = {
  baseFunctionFolder?: string;
  baseFunctionString?: string;
  eventBus?: EventBusPrefab;
  tablePrefab?: DynamoTablePrefab;
  modifiers?: ((lambda: NodejsFunction) => any)[];
  environment?: Record<string, string>;
  compiled?: true;
  tracingDisabled?: true;
};

export class BaseFunction extends Construct {
  public readonly lambdaFunction: NodejsFunction;

  constructor(service: Service, params: BaseHandlerParams & BaseFunctionParams) {
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
      entry: params.baseFunctionString
        ? params.baseFunctionString
        : getFunctionEntry(params.baseFunctionFolder!, params.name, params.compiled),
      architecture: params.architecture || Architecture.ARM_64,
      ...params,
      environment: {
        CC_SERVICE: service.props.serviceName,
        CC_ENV: ccEnv,
        CC_LOG_LEVEL: 'error',
        ...params.environment,
      },
    });
    this.lambdaFunction.addEnvironment('CC_FUNCTION_TIMEOUT', this.lambdaFunction.timeout!.toSeconds().toString());
    if (!params.tracingDisabled) this.lambdaFunction.addEnvironment('CC_TRACING', 'true');

    if (params.vpc) {
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
