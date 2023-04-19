/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Aspects } from 'aws-cdk-lib';
import { InstanceType, Peer, Port, SecurityGroup, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import * as awsRds from 'aws-cdk-lib/aws-rds';
import { CfnDatabase } from 'aws-cdk-lib/aws-timestream';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { VpcPrefab } from 'prefab/networking/vpc';

export type AuroraPerformanceTunning = {
  instances: number;
  minCapacity: number;
  maxCapacity: number;
};

export type AuroraServerlessV2PrefabParams = {
  clusterName: string;
  vpcPrefab: VpcPrefab;
  performanceTunning: AuroraPerformanceTunning;
};

export class AuroraServerlessV2Prefab extends Construct {
  public readonly database: CfnDatabase;

  constructor(service: Service, params: AuroraServerlessV2PrefabParams) {
    super(service, getLogicalName(AuroraServerlessV2Prefab.name, params.clusterName));

    const sg = new SecurityGroup(this, 'ClusterSecurityGroup', {
      vpc: params.vpcPrefab.vpc,
      allowAllOutbound: true,
    });
    sg.addIngressRule(Peer.anyIpv4(), Port.tcp(5432), 'allow inbound traffic from anywhere to the db on port 5432');

    const cluster = new awsRds.DatabaseCluster(this, 'Cluster', {
      clusterIdentifier: getResourceName(params.clusterName, service.props),
      engine: awsRds.DatabaseClusterEngine.auroraPostgres({
        version: awsRds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      credentials: awsRds.Credentials.fromGeneratedSecret('postgres', {
        secretName: getResourceName(params.clusterName, service.props),
      }),
      instanceProps: {
        vpc: params.vpcPrefab.vpc,
        instanceType: new InstanceType('serverless'),
        autoMinorVersionUpgrade: true,
        publiclyAccessible: true,
        securityGroups: [sg],
        vpcSubnets: params.vpcPrefab.vpc.selectSubnets({ subnetType: SubnetType.PUBLIC }),
      },
      instances: params.performanceTunning.instances,
      port: 5432, // Default port for postgres
    });

    // Capacity
    Aspects.of(cluster).add({
      visit(node) {
        if (node instanceof awsRds.CfnDBCluster) {
          node.serverlessV2ScalingConfiguration = {
            minCapacity: params.performanceTunning.minCapacity,
            maxCapacity: params.performanceTunning.maxCapacity,
          };
        }
      },
    });

    // RDS Proxy
    const rdsRole = new Role(this, 'ProxyRole', {
      roleName: getResourceName('proxy', service.props),
      assumedBy: new ServicePrincipal('rds.amazonaws.com'),
    });
    const proxy = new awsRds.DatabaseProxy(this, 'Proxy', {
      dbProxyName: getResourceName('proxy', service.props),
      proxyTarget: awsRds.ProxyTarget.fromCluster(cluster),
      secrets: [cluster.secret!],
      iamAuth: true,
      vpc: params.vpcPrefab.vpc,
      role: rdsRole,
    });
    proxy.grantConnect(rdsRole);
  }
}
