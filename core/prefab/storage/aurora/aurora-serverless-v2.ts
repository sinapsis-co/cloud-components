/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CfnDatabase } from 'aws-cdk-lib/aws-timestream';
import { Construct } from 'constructs';

import { Aspects } from 'aws-cdk-lib';
import { InstanceType, Peer, Port, SecurityGroup, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { AccountPrincipal, Role } from 'aws-cdk-lib/aws-iam';
import {
  AuroraPostgresEngineVersion,
  CfnDBCluster,
  DatabaseCluster,
  DatabaseClusterEngine,
  DatabaseProxy,
  ProxyTarget,
} from 'aws-cdk-lib/aws-rds';
import { getLogicalName } from '../../../common/naming/get-logical-name';
import { Service } from '../../../common/service';
import { VpcPrefab } from '../../networking/vpc';

export type TimeStreamDBParams = {
  databaseName: string;
  vpcPrefab: VpcPrefab;
};

export class AuroraServerlessV2Prefab extends Construct {
  public readonly database: CfnDatabase;

  constructor(service: Service, params: TimeStreamDBParams) {
    super(service, getLogicalName(AuroraServerlessV2Prefab.name, params.databaseName));

    const sg = new SecurityGroup(this, 'ClusterSecurityGroup', {
      vpc: params.vpcPrefab.vpc,
      allowAllOutbound: true,
    });
    sg.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(5432), // allow inbound traffic on port 5432 (postgres)
      'allow inbound traffic from anywhere to the db on port 5432'
    );

    const cluster = new DatabaseCluster(this, 'Cluster', {
      engine: DatabaseClusterEngine.auroraPostgres({
        version: AuroraPostgresEngineVersion.VER_15_2,
      }),
      instanceProps: {
        vpc: params.vpcPrefab.vpc,
        instanceType: new InstanceType('serverless'),
        autoMinorVersionUpgrade: true,
        publiclyAccessible: true,
        securityGroups: [sg],
        vpcSubnets: params.vpcPrefab.vpc.selectSubnets({ subnetType: SubnetType.PUBLIC }),
      },
      instances: 1,
      port: 5432, // use port 5432 instead of 3306
    });

    // add capacity to the db cluster to enable scaling
    Aspects.of(cluster).add({
      visit(node) {
        if (node instanceof CfnDBCluster) {
          node.serverlessV2ScalingConfiguration = {
            minCapacity: 0.5, // min capacity is 0.5 vCPU
            maxCapacity: 2, // max capacity is 1 vCPU (default)
          };
        }
      },
    });

    const proxy = new DatabaseProxy(this, 'Proxy', {
      proxyTarget: ProxyTarget.fromCluster(cluster),
      secrets: [cluster.secret!],
      vpc: params.vpcPrefab.vpc,
    });

    const role = new Role(this, 'ProxyRole', { assumedBy: new AccountPrincipal(service.account) });
    proxy.grantConnect(role, 'admin');
  }
}
