import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { IRepository, Repository } from 'aws-cdk-lib/aws-ecr';
import * as awsECS from 'aws-cdk-lib/aws-ecs';
import { FargatePlatformVersion, HealthCheck, Secret } from 'aws-cdk-lib/aws-ecs';
import * as awsALB from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { LogGroup } from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { SynthError } from 'common/synth/synth-error';

import { PublicAlbPrefab } from 'prefab/gateway/alb-public';
import { VpcPrefab } from 'prefab/networking/vpc';
import { FargateClusterPrefab } from './cluster';

export type FargateContainerHealthCheck = HealthCheck;

export type FargatePerformanceTunning = {
  taskCpu: string;
  taskMemory: string;
  containerDesiredCount: number;
  taskAutoScaleMin: number;
  taskAutoScaleMax: number;
  taskAutoScalePercent: number;
  containerMaxMemory: number;
};

export type FargateServicePrefabParams = {
  name: string;
  fargateClusterPrefab: FargateClusterPrefab;
  vpcPrefab: VpcPrefab;
  albPrefab: PublicAlbPrefab;
  mappingPort: number;
  basePath: string;
  fixedPriority?: number;
  healthCheckPath: string;
  certificate: ICertificate;
  containerHealthCheck?: FargateContainerHealthCheck;
  containerEnv?: Record<string, string>;
  containerSecrets?: Record<string, Secret>;
  dockerBuildFolder?: string;
  externalRepository?: {
    repositoryName: string;
    tag?: string;
  };
  performanceTunning: FargatePerformanceTunning;
};

export class FargateServicePrefab extends Construct {
  public readonly repository: IRepository;
  public readonly targetGroup: awsALB.ApplicationTargetGroup;

  constructor(service: Service, params: FargateServicePrefabParams) {
    super(service, getLogicalName(params.name, FargateServicePrefab.name));

    if (!params.dockerBuildFolder && !params.externalRepository)
      throw new SynthError('dockerBuildFolder or externalRepository should exist');

    if (params.externalRepository) {
      this.repository = Repository.fromRepositoryName(
        this,
        getLogicalName(params.name, 'repo'),
        params.externalRepository.repositoryName
      );
    }

    // CONTAINER TASK DEFINITION
    const taskDefinition = new awsECS.TaskDefinition(this, getLogicalName(params.name, 'taskDefinition'), {
      family: getResourceName('task-definition', { ...service.props, serviceName: params.name }),
      compatibility: awsECS.Compatibility.FARGATE,
      networkMode: awsECS.NetworkMode.AWS_VPC,
      cpu: params.performanceTunning.taskCpu || '256',
      memoryMiB: params.performanceTunning.taskMemory || '512',
    });

    taskDefinition.addContainer(getLogicalName(params.name, 'container'), {
      containerName: params.name,
      image: params.dockerBuildFolder
        ? awsECS.ContainerImage.fromAsset(params.dockerBuildFolder)
        : awsECS.ContainerImage.fromEcrRepository(this.repository, params.externalRepository?.tag || 'latest'),
      // memoryLimitMiB: params.performanceTunning.containerMaxMemory,
      secrets: params.containerSecrets,
      healthCheck: params.containerHealthCheck,
      environment: { BASE_PATH: params.basePath, ...params.containerEnv },
      logging: awsECS.LogDriver.awsLogs({
        streamPrefix: params.name,
        logGroup: new LogGroup(this, getLogicalName(params.name, 'logGroup'), {
          logGroupName: getResourceName('', service.props),
        }),
      }),
      portMappings: [{ containerPort: params.mappingPort }],
    });

    taskDefinition.addToTaskRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'ssmmessages:CreateControlChannel',
          'ssmmessages:CreateDataChannel',
          'ssmmessages:OpenControlChannel',
          'ssmmessages:OpenDataChannel',
        ],
        resources: ['*'],
      })
    );
    if (params.externalRepository) this.repository.grantPull(taskDefinition.taskRole);

    // FARGATE SERVICE
    const fargateService = new awsECS.FargateService(this, getLogicalName(params.name, 'fargateService'), {
      serviceName: getResourceName('service', { ...service.props, serviceName: params.name }),
      platformVersion: FargatePlatformVersion.LATEST,
      cluster: params.fargateClusterPrefab.cluster,
      desiredCount: params.performanceTunning.containerDesiredCount,
      taskDefinition,
      securityGroups: [params.albPrefab.getAlbToClusterSG()],
      assignPublicIp: true,
      circuitBreaker: { rollback: true },
      capacityProviderStrategies: [{ capacityProvider: 'FARGATE' }],
    });

    // AUTOSCALING
    const scalableTarget = fargateService.autoScaleTaskCount({
      minCapacity: params.performanceTunning.taskAutoScaleMin,
      maxCapacity: params.performanceTunning.taskAutoScaleMax,
    });
    scalableTarget.scaleOnMemoryUtilization(getLogicalName(params.name, 'ScaleUpMem'), {
      targetUtilizationPercent: params.performanceTunning.taskAutoScalePercent,
    });
    scalableTarget.scaleOnCpuUtilization(getLogicalName(params.name, 'ScaleUpCPU'), {
      targetUtilizationPercent: params.performanceTunning.taskAutoScalePercent,
    });

    // CONNECT TO ALB
    params.albPrefab.appendTargetGroup({ ...params, fargateService });
  }
}
