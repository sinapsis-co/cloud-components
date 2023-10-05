import { Peer, Port, SecurityGroup, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { CronOptions } from 'aws-cdk-lib/aws-events';
import { PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as awsRds from 'aws-cdk-lib/aws-rds';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { Fn } from 'aws-cdk-lib';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { CronAggregate } from 'prefab/compute/function/cron-function/cron-aggregate';
import { VpcPrefab } from 'prefab/networking/vpc';

export type AuroraPerformanceTuning = {
  readInstances?: number;
  readInstanceType?: awsRds.IClusterInstance;
  readers?: awsRds.IClusterInstance[];
  minCapacity?: number;
  maxCapacity?: number;
};

export type AuroraServerlessV2PrefabParams = {
  clusterName: string;
  vpcPrefab: VpcPrefab;
  performanceTuning: AuroraPerformanceTuning;
  port?: number;
  engine?: awsRds.IClusterEngine;
  publicAccess?: boolean;
  baseDir?: string;
  scheduledPause?: {
    startCron: CronOptions;
    stopCron: CronOptions;
  };
};

export class RdsClusterPrefab extends Construct {
  public readonly cluster: awsRds.DatabaseCluster;
  public readonly proxy: awsRds.DatabaseProxy;
  public readonly secret: ISecret;
  public readonly cronAggregate: CronAggregate;

  constructor(service: Service, params: AuroraServerlessV2PrefabParams) {
    super(service, getLogicalName(RdsClusterPrefab.name, params.clusterName));

    const sg = new SecurityGroup(this, 'ClusterSecurityGroup', {
      securityGroupName: getResourceName(params.clusterName, service.props),
      vpc: params.vpcPrefab.vpc,
      allowAllOutbound: true,
    });
    sg.addIngressRule(Peer.anyIpv4(), Port.tcp(params.port || 5432), 'DefaultClusterPort');

    this.cluster = new awsRds.DatabaseCluster(this, 'Cluster', {
      port: params.port || 5432, // Default port for postgres
      clusterIdentifier: getResourceName(params.clusterName, service.props),
      vpc: params.vpcPrefab.vpc,
      ...(params.publicAccess ? { vpcSubnets: { subnetType: SubnetType.PUBLIC } } : {}),
      securityGroups: [sg],
      engine:
        params.engine ||
        awsRds.DatabaseClusterEngine.auroraPostgres({
          version: awsRds.AuroraPostgresEngineVersion.VER_15_2,
        }),
      credentials: awsRds.Credentials.fromGeneratedSecret('postgres', {
        secretName: getResourceName(params.clusterName, service.props),
      }),
      writer: awsRds.ClusterInstance.serverlessV2('writer', {
        instanceIdentifier: getResourceName('writer-master', service.props),
        publiclyAccessible: params.publicAccess,
      }),
      readers:
        params.performanceTuning.readers ||
        [...Array(params.performanceTuning.readInstances).keys()].map((i) =>
          awsRds.ClusterInstance.serverlessV2(`reader-${i}`, {
            instanceIdentifier: getResourceName(`reader-${i}`, service.props),
            ...(i === 0 ? { scaleWithWriter: true } : {}),
            publiclyAccessible: params.publicAccess,
          })
        ),
      serverlessV2MinCapacity: params.performanceTuning.minCapacity,
      serverlessV2MaxCapacity: params.performanceTuning.maxCapacity,
    });

    // RDS Proxy
    const rdsRole = new Role(this, 'ProxyRole', {
      roleName: getResourceName('proxy', service.props),
      assumedBy: new ServicePrincipal('rds.amazonaws.com'),
    });
    this.proxy = new awsRds.DatabaseProxy(this, 'Proxy', {
      dbProxyName: getResourceName('proxy', service.props),
      proxyTarget: awsRds.ProxyTarget.fromCluster(this.cluster),
      secrets: [this.cluster.secret!],
      iamAuth: true,
      vpc: params.vpcPrefab.vpc,
      securityGroups: [sg],
      role: rdsRole,
    });

    // Command Execution Parameter
    this.secret = this.cluster.secret!;
    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        baseDir: params.baseDir || `support/${service.props.serviceName}`,
        clusterSecretArn: this.cluster.secret?.secretArn,
      }),
    });

    // Scheduled Pause
    if (params.scheduledPause) {
      this.cronAggregate = new CronAggregate(service, {
        baseFunctionFolder: __dirname,
        ...(service.props.isDemoProject ? {} : { compiled: true }),
        handlers: {
          start: {
            name: 'start-cluster',
            cronOptions: params.scheduledPause.startCron,
            environment: { DB_CLUSTER_NAME: this.cluster.clusterIdentifier },
          },
          stop: {
            name: 'stop-cluster',
            cronOptions: params.scheduledPause.stopCron,
            environment: { DB_CLUSTER_NAME: this.cluster.clusterIdentifier },
          },
        },
      });
    }
    this.cronAggregate.handlers.start.role?.addToPrincipalPolicy(
      new PolicyStatement({
        actions: ['rds:StartDBCluster'],
        resources: [
          Fn.join('', [
            `arn:aws:rds:${service.props.regionName}:${service.account}:cluster:`,
            this.cluster.clusterIdentifier,
          ]),
        ],
      })
    );
    this.cronAggregate.handlers.stop.role?.addToPrincipalPolicy(
      new PolicyStatement({
        actions: ['rds:StopDBCluster'],
        resources: [
          Fn.join('', [
            `arn:aws:rds:${service.props.regionName}:${service.account}:cluster:`,
            this.cluster.clusterIdentifier,
          ]),
        ],
      })
    );
  }

  public useMod(variableName = 'DB', mods: ((proxy: awsRds.DatabaseProxy) => any)[]): (lambda: NodejsFunction) => void {
    return (lambda: NodejsFunction): void => {
      lambda.addEnvironment(variableName, this.proxy.endpoint);
      mods.map((fn) => fn(this.proxy)(lambda));
    };
  }

  public useModWriter(variableName = 'DB'): (lambda: NodejsFunction) => void {
    return this.useMod(variableName, [RdsClusterPrefab.modifier.connect]);
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
