import { Tags } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { ISecurityGroup, IVpc, Peer, Port, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { FargateService } from 'aws-cdk-lib/aws-ecs';
import * as awsALB from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ApplicationListener, ListenerAction, ListenerCondition } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

import { getLogicalName } from '../../../common/naming/get-logical-name';
import { getResourceName } from '../../../common/naming/get-resource-name';
import { Service } from '../../../common/service';
import { SynthError } from '../../../common/synth/synth-error';
import { CdnApiPrefab } from '../cdn-api';

export type PublicAlbPrefabParams = {
  name: string;
  vpc: IVpc;
  certificate: ICertificate;
  basePath?: string;
  cdnApiPrefab?: CdnApiPrefab;
  existingResource?: {
    albToClusterSG: string;
    securityGroupId: string;
    listenerArn: string;
  };
};

export class PublicAlbPrefab extends Construct {
  public readonly alb: awsALB.ApplicationLoadBalancer;
  private readonly listener: awsALB.IApplicationListener;
  private readonly albToClusterSG: ISecurityGroup;
  private readonly upstreamSG: ISecurityGroup;
  private readonly vpc: IVpc;
  private priorityIndex: number;
  private service: Service;

  constructor(service: Service, params: PublicAlbPrefabParams) {
    super(service, getLogicalName(PublicAlbPrefab.name));

    this.service = service;
    this.vpc = params.vpc;
    this.priorityIndex = 1;

    if (params.existingResource) {
      this.listener = ApplicationListener.fromApplicationListenerAttributes(
        this,
        getLogicalName(params.name, 'listener'),
        {
          listenerArn: params.existingResource.listenerArn,
          securityGroup: SecurityGroup.fromSecurityGroupId(this, 'sg', params.existingResource.securityGroupId),
        }
      );
      this.albToClusterSG = SecurityGroup.fromSecurityGroupId(this, 'escSG', params.existingResource.albToClusterSG);
      return this;
    }

    // UPSTREAM SECURITY GROUP
    this.upstreamSG = new SecurityGroup(this, getLogicalName(params.name, 'sg'), {
      securityGroupName: getResourceName('upstream', service.props),
      vpc: params.vpc,
      allowAllOutbound: true,
    });
    Tags.of(this.upstreamSG).add('Name', getResourceName('upstream', service.props));
    this.upstreamSG.addIngressRule(Peer.anyIpv4(), Port.tcp(443), 'Allow https traffic');

    // ALB
    this.alb = new awsALB.ApplicationLoadBalancer(this, getLogicalName(params.name, 'alb'), {
      loadBalancerName: getResourceName('', { ...this.service.props, serviceName: params.name }),
      vpc: params.vpc,
      vpcSubnets: { subnets: params.vpc.publicSubnets },
      internetFacing: true,
      securityGroup: this.upstreamSG,
    });

    // INBOUND
    this.listener = this.alb.addListener(getLogicalName(params.name, 'listener'), {
      open: true,
      protocol: awsALB.ApplicationProtocol.HTTPS,
      port: 443,
      certificates: [params.certificate],
      defaultAction: ListenerAction.fixedResponse(404, { messageBody: 'MissingPath' }),
    });
    // this.alb.addSecurityGroup(this.sg), getResourceName('upstream', service.props);

    this.albToClusterSG = new SecurityGroup(this, getLogicalName(params.name, 'escSG'), {
      securityGroupName: getResourceName('downstream', service.props),
      vpc: params.vpc,
      allowAllOutbound: true,
    });
    this.albToClusterSG.connections.allowFrom(this.upstreamSG, Port.allTcp(), 'Outbound traffic from ALB to Cluster');
    Tags.of(this.albToClusterSG).add('Name', getResourceName('downstream', service.props));

    // ADD PATH TO CDN DISTRO
    if (params.cdnApiPrefab) {
      if (!params.basePath) throw new SynthError('basePath is required when cdnApi is enabled');
      params.cdnApiPrefab.addAlb(params.basePath, this.alb);
    }
  }
  private getNextPriorityIndex(): number {
    return this.priorityIndex++;
  }
  public getAlbToClusterSG(): ISecurityGroup {
    return this.albToClusterSG;
  }
  public appendTargetGroup({
    name,
    basePath,
    mappingPort,
    fargateService,
    healthCheckPath,
    fixedPriority,
  }: AppendTargetGroup): void {
    const targetGroup = new awsALB.ApplicationTargetGroup(this, getLogicalName(name, 'targetGroup'), {
      targetGroupName: getResourceName('', { ...this.service.props, serviceName: name }),
      port: mappingPort,
      vpc: this.vpc,
      protocol: awsALB.ApplicationProtocol.HTTP,
      healthCheck: { protocol: awsALB.Protocol.HTTP, path: healthCheckPath },
      targets: [fargateService.loadBalancerTarget({ containerName: name, containerPort: mappingPort })],
    });

    this.listener.addTargetGroups(getLogicalName(name, 'listenerTG'), {
      targetGroups: [targetGroup],
      conditions: [ListenerCondition.pathPatterns([`${basePath}*`])],
      priority: fixedPriority || this.getNextPriorityIndex(),
    });
  }
}

export type AppendTargetGroup = {
  name: string;
  basePath: string;
  mappingPort: number;
  fargateService: FargateService;
  healthCheckPath: string;
  fixedPriority?: number;
};
