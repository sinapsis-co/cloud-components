import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { OriginRequestPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { LoadBalancerV2Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ISecurityGroup, IVpc, Peer, Port, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { FargateService } from 'aws-cdk-lib/aws-ecs';
import * as awsALB from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ApplicationListener, ListenerAction, ListenerCondition } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { SynthError } from '../../common/synth/synth-error';
import { ApiCdnApiParams } from '../../prefab/function/api-function/api-aggregate';

export type PublicAlbConstructParams = {
  name: string;
  vpc: IVpc;
  certificate: ICertificate;
  basePath?: string;
  cdnApi?: ApiCdnApiParams;
  existingResource?: {
    albToClusterSG: string;
    securityGroupId: string;
    listenerArn: string;
  };
};

export class PublicAlbConstruct extends Construct {
  private readonly albToClusterSG: ISecurityGroup;
  private readonly alb: awsALB.ApplicationLoadBalancer;
  private readonly listener: awsALB.IApplicationListener;
  private readonly sg: ISecurityGroup;
  private readonly vpc: IVpc;
  private priorityIndex: number;
  private service: Service;

  constructor(service: Service, params: PublicAlbConstructParams) {
    super(service, getLogicalName(PublicAlbConstruct.name));

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
    // ALB
    this.alb = new awsALB.ApplicationLoadBalancer(this, getLogicalName(params.name, 'alb'), {
      loadBalancerName: getResourceName('', { ...this.service.props, serviceName: params.name }),
      vpc: params.vpc,
      vpcSubnets: { subnets: params.vpc.publicSubnets },
      internetFacing: true,
    });

    // INBOUND
    this.listener = this.alb.addListener(getLogicalName(params.name, 'listener'), {
      open: true,
      protocol: awsALB.ApplicationProtocol.HTTPS,
      port: 443,
      certificates: [params.certificate],
      defaultAction: ListenerAction.fixedResponse(404, { messageBody: 'MissingPath' }),
    });

    // SECURITY GROUP
    this.sg = new SecurityGroup(this, getLogicalName(params.name, 'sg'), {
      vpc: params.vpc,
      allowAllOutbound: true,
    });
    this.sg.addIngressRule(Peer.anyIpv4(), Port.tcp(443), 'Allow https traffic');
    this.alb.addSecurityGroup(this.sg);

    this.albToClusterSG = new SecurityGroup(this, getLogicalName(params.name, 'escSG'), {
      securityGroupName: getResourceName('alb-to-fargate', service.props),
      vpc: params.vpc,
      allowAllOutbound: true,
    });
    this.albToClusterSG.connections.allowFrom(this.sg, Port.allTcp(), 'Outbound traffic from ALB to Cluster');

    // ADD PATH TO CDN DISTRO
    if (params.cdnApi) {
      if (!params.basePath) throw new SynthError('basePath is required when cdnApi is enabled');
      params.cdnApi.distribution?.addBehavior(`/${params.basePath}/*`, new LoadBalancerV2Origin(this.alb), {
        ...params.cdnApi.behaviorOptions,
        originRequestPolicy: OriginRequestPolicy.ALL_VIEWER_AND_CLOUDFRONT_2022,
      });
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
      conditions: [ListenerCondition.pathPatterns([`/${basePath}*`])],
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
