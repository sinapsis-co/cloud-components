import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Repository } from 'aws-cdk-lib/aws-ecr';
import * as awsECS from 'aws-cdk-lib/aws-ecs';
import { FargatePlatformVersion, HealthCheck, Secret } from 'aws-cdk-lib/aws-ecs';
import * as awsALB from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { SynthError } from '../../common/synth/synth-error';
import { PublicAlbConstruct } from '../alb-public';
import { VpcConstruct } from '../vpc';

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

export type FargateContainerConstructParams = {
  name: string;
  vpcService: VpcConstruct;
  albService: PublicAlbConstruct;
  mappingPort: number;
  basePath: string;
  healthCheckPath: string;
  certificate: ICertificate;
  containerHealthCheck?: FargateContainerHealthCheck;
  containerEnv?: Record<string, string>;
  containerSecrets?: Record<string, Secret>;
  dockerBuildFolder?: string;
  dockerImageName?: string;
  performanceTunning: FargatePerformanceTunning;
};

export class FargateContainerConstruct extends Construct {
  public readonly repository: Repository;
  public readonly targetGroup: awsALB.ApplicationTargetGroup;

  constructor(service: Service, params: FargateContainerConstructParams) {
    super(service, getLogicalName(params.name, FargateContainerConstruct.name));

    if (!params.dockerBuildFolder && !params.dockerImageName)
      throw new SynthError('dockerBuildFolder or dockerRepositoryName should exist');

    if (params.dockerImageName && !params.dockerBuildFolder)
      this.repository = new Repository(this, getLogicalName(params.name, 'repo'), {
        repositoryName: params.dockerImageName,
      });

    // CLUSTER
    const cluster = new awsECS.Cluster(this, getLogicalName(params.name, 'cluster'), {
      containerInsights: true,
      clusterName: getResourceName('cluster', { ...service.props, serviceName: params.name }),
      vpc: params.vpcService.vpc,
    });

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
        : awsECS.RepositoryImage.fromEcrRepository(this.repository, 'latest'),
      memoryLimitMiB: params.performanceTunning.containerMaxMemory || 512,
      secrets: params.containerSecrets,
      healthCheck: params.containerHealthCheck,
      environment: { BASE_PATH: `/${params.basePath}`, ...params.containerEnv },
      logging: awsECS.LogDriver.awsLogs({ streamPrefix: params.name }),
      portMappings: [{ containerPort: params.mappingPort }],
    });

    // FARGATE
    const fargateService = new awsECS.FargateService(this, getLogicalName(params.name, 'fargateService'), {
      serviceName: getResourceName('service', { ...service.props, serviceName: params.name }),
      platformVersion: FargatePlatformVersion.LATEST,
      cluster,
      desiredCount: params.performanceTunning.containerDesiredCount,
      taskDefinition,
      securityGroups: [params.albService.albToClusterSG],
      assignPublicIp: true,
      circuitBreaker: { rollback: true },
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
    params.albService.appendTargetGroup({ ...params, fargateService });
  }
}
