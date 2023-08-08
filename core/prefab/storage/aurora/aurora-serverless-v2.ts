/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as awsRds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { Peer, Port, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { VpcPrefab } from 'prefab/networking/vpc';

export type AuroraPerformanceTunning = {
  writeInstances: number;
  readInstances: number;
  minCapacity: number;
  maxCapacity: number;
};

export type AuroraServerlessV2PrefabParams = {
  clusterName: string;
  vpcPrefab: VpcPrefab;
  performanceTunning: AuroraPerformanceTunning;
  publicAccess?: boolean;
};

export class AuroraServerlessV2Prefab extends Construct {
  public readonly proxy: awsRds.DatabaseProxy;

  constructor(service: Service, params: AuroraServerlessV2PrefabParams) {
    super(service, getLogicalName(AuroraServerlessV2Prefab.name, params.clusterName));

    const sg = new SecurityGroup(this, 'ClusterSecurityGroup', {
      vpc: params.vpcPrefab.vpc,
      allowAllOutbound: true,
    });
    sg.addIngressRule(Peer.anyIpv4(), Port.tcp(5432), 'allow inbound traffic from anywhere to the db on port 5432');

    const cluster = new awsRds.DatabaseCluster(this, 'Cluster', {
      port: 5432, // Default port for postgres
      clusterIdentifier: getResourceName(params.clusterName, service.props),
      vpc: params.vpcPrefab.vpc,
      securityGroups: [sg],
      engine: awsRds.DatabaseClusterEngine.auroraPostgres({
        version: awsRds.AuroraPostgresEngineVersion.VER_15_2,
      }),
      credentials: awsRds.Credentials.fromGeneratedSecret('postgres', {
        secretName: getResourceName(params.clusterName, service.props),
      }),
      writer: awsRds.ClusterInstance.serverlessV2('writer', {
        instanceIdentifier: getResourceName('writer-master', service.props),
        publiclyAccessible: params.publicAccess,
      }),
      readers: [...Array(params.performanceTunning.readInstances).keys()].map((i) =>
        awsRds.ClusterInstance.serverlessV2(`reader-${i}`, {
          instanceIdentifier: getResourceName(`reader${i}`, service.props),
          ...(i === 0 ? { scaleWithWriter: true } : {}),
          publiclyAccessible: params.publicAccess,
        })
      ),
      serverlessV2MinCapacity: params.performanceTunning.minCapacity,
      serverlessV2MaxCapacity: params.performanceTunning.maxCapacity,
    });

    // RDS Proxy
    const rdsRole = new Role(this, 'ProxyRole', {
      roleName: getResourceName('proxy', service.props),
      assumedBy: new ServicePrincipal('rds.amazonaws.com'),
    });
    this.proxy = new awsRds.DatabaseProxy(this, 'Proxy', {
      dbProxyName: getResourceName('proxy', service.props),
      proxyTarget: awsRds.ProxyTarget.fromCluster(cluster),
      secrets: [cluster.secret!],
      iamAuth: true,
      vpc: params.vpcPrefab.vpc,
      role: rdsRole,
    });
  }

  public useMod(variableName = 'DB', mods: ((proxy: awsRds.DatabaseProxy) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.proxy.endpoint);
      mods.map((fn) => fn(this.proxy)(lambda));
    };
  }

  public useModWriter(variableName = 'DB'): (lambda: NodejsFunction) => void {
    return this.useMod(variableName, [AuroraServerlessV2Prefab.modifier.connect]);
  }

  public static modifier = {
    connect: (proxy: awsRds.DatabaseProxy): ((lambda: NodejsFunction) => NodejsFunction) => {
      return (lambda: NodejsFunction): NodejsFunction => {
        proxy.grantConnect(lambda);
        return lambda;
      };
    },
  };
}
