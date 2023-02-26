import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { OriginRequestPolicy } from 'aws-cdk-lib/aws-cloudfront';
import { LoadBalancerV2Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { Peer, Port, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { FargateService } from 'aws-cdk-lib/aws-ecs';
import * as awsALB from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { ListenerAction, ListenerCondition } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

import { getLogicalName } from '../../common/naming/get-logical-name';
import { getResourceName } from '../../common/naming/get-resource-name';
import { Service } from '../../common/service';
import { SynthError } from '../../common/synth/synth-error';
import { ApiCdnApiParams } from '../../prefab/function/api-function/api-aggregate';

export type PublicAlbConstructParams = {
  name: string;
  vpc: Vpc;
  certificate: ICertificate;
  basePath?: string;
  cdnApi?: ApiCdnApiParams;
};

export class PublicAlbConstruct extends Construct {
  public readonly alb: awsALB.ApplicationLoadBalancer;
  public readonly listener: awsALB.ApplicationListener;
  public readonly sg: SecurityGroup;
  public readonly vpc: Vpc;
  public readonly albToClusterSG: SecurityGroup;
  private priorityIndex: number;
  private service: Service;

  constructor(service: Service, params: PublicAlbConstructParams) {
    super(service, getLogicalName(PublicAlbConstruct.name));
    this.service = service;
    this.vpc = params.vpc;
    this.priorityIndex = 1;

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
  public appendTargetGroup({
    name,
    basePath,
    mappingPort,
    fargateService,
    healthCheckPath,
  }: {
    name: string;
    basePath: string;
    mappingPort: number;
    fargateService: FargateService;
    healthCheckPath: string;
  }): void {
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
      priority: this.priorityIndex,
    });

    this.priorityIndex++;
  }
}
