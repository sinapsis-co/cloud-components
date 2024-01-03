import {
  AmazonLinuxGeneration,
  AmazonLinuxImage,
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Peer,
  Port,
  SecurityGroup,
  SecurityGroupProps,
  SubnetSelection,
  SubnetType,
} from 'aws-cdk-lib/aws-ec2';
import { CronOptions } from 'aws-cdk-lib/aws-events';
import { ManagedPolicy, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import * as awsRds from 'aws-cdk-lib/aws-rds';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';

import { Modifier } from '@sinapsis-cloud-components/core/common/modifier';
import { SynthError } from '@sinapsis-cloud-components/core/common/synth/synth-error';
import { Fn, RemovalPolicy } from 'aws-cdk-lib';
import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName, getShortResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';
import { CronAggregate } from 'prefab/compute/function/cron-function/cron-aggregate';
import { VpcPrefab } from 'prefab/networking/vpc';

export type AuroraPerformanceTuning = {
  writeInstanceProps?: awsRds.ServerlessV2ClusterInstanceProps;
  readInstanceProps?: awsRds.ServerlessV2ClusterInstanceProps;
  readInstances?: number;
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
  publicAccess: boolean;
  baseDir?: string;
  scheduledPause?: {
    startCron: CronOptions;
    stopCron: CronOptions;
  };
  vpcSubnets?: SubnetSelection;
  securityGroupProps?: Partial<SecurityGroupProps>;
  databaseClusterProps?: Partial<awsRds.DatabaseClusterProps>;
  databaseProxyProps?: Partial<awsRds.DatabaseProxyProps>;
};

export class RdsClusterPrefab extends Construct {
  public readonly cluster: awsRds.DatabaseCluster;
  public readonly securityGroup: SecurityGroup;
  public readonly securityGroupBastion: SecurityGroup;
  public readonly roleBastion: Role;
  public readonly ec2Bastion: Instance;
  public readonly vpcSubnets?: SubnetSelection;
  public readonly proxy: awsRds.DatabaseProxy;
  public readonly secret: ISecret;
  public readonly cronAggregate: CronAggregate;
  public readonly readonlyRdsProxyEndpoint: awsRds.CfnDBProxyEndpoint;

  constructor(service: Service, params: AuroraServerlessV2PrefabParams) {
    super(service, getLogicalName(RdsClusterPrefab.name, params.clusterName));

    if (!params.publicAccess) {
      // Create SG for EC2 Bastion
      this.securityGroupBastion = new SecurityGroup(this, 'BastionSecurityGroup', {
        securityGroupName: getResourceName('ec2Bastion', service.props),
        vpc: params.vpcPrefab.vpc,
        allowAllOutbound: false,
      });
      this.securityGroupBastion.addEgressRule(Peer.anyIpv4(), Port.tcp(params.port || 5432), 'RdsBastionPort');
      this.securityGroupBastion.addEgressRule(Peer.anyIpv4(), Port.tcp(params.port || 443), 'HttpsBastionPort');

      // Create Role for EC2 to allow use SSMManagedIntance
      this.roleBastion = new Role(this, getLogicalName('role', 'ec2Bastion'), {
        assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
        roleName: getShortResourceName('ec2BastionSSM', service.props),
      });
      this.roleBastion.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
    }

    this.securityGroup = new SecurityGroup(this, 'ClusterSecurityGroup', {
      securityGroupName: getResourceName(params.clusterName, service.props),
      vpc: params.vpcPrefab.vpc,
      allowAllOutbound: true,
      ...params.securityGroupProps,
    });
    this.securityGroup.addIngressRule(Peer.anyIpv4(), Port.tcp(params.port || 5432), 'DefaultClusterPort');
    // Allow SG EC2 in Inbound Rules SG RDS
    if (!params.publicAccess)
      this.securityGroup.connections.allowFrom(
        this.securityGroupBastion,
        Port.tcp(params.port || 5432),
        'BastionInboundRule'
      );

    this.cluster = new awsRds.DatabaseCluster(this, 'Cluster', {
      port: params.port || 5432, // Default port for postgres
      clusterIdentifier: getResourceName(params.clusterName, service.props),
      vpc: params.vpcPrefab.vpc,
      ...(params.vpcSubnets || params.publicAccess ? { vpcSubnets: { subnetType: SubnetType.PUBLIC } } : {}),
      securityGroups: [this.securityGroup],
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
        caCertificate: awsRds.CaCertificate.RDS_CA_RDS2048_G1,
        ...params.performanceTuning.writeInstanceProps,
      }),
      readers:
        params.performanceTuning.readers ||
        [...Array(params.performanceTuning.readInstances).keys()].map((i) =>
          awsRds.ClusterInstance.serverlessV2(`reader-${i}`, {
            instanceIdentifier: getResourceName(`reader-${i}`, service.props),
            publiclyAccessible: params.publicAccess,
            caCertificate: awsRds.CaCertificate.RDS_CA_RDS2048_G1,
            ...params.performanceTuning.readInstanceProps,
            ...(params.performanceTuning.readInstanceProps?.scaleWithWriter === undefined
              ? { scaleWithWriter: true }
              : { scaleWithWriter: params.performanceTuning.readInstanceProps?.scaleWithWriter }),
          })
        ),
      serverlessV2MinCapacity: params.performanceTuning.minCapacity,
      serverlessV2MaxCapacity: params.performanceTuning.maxCapacity,
      ...params.databaseClusterProps,
    });
    if (!params.publicAccess) {
      // Create EC2 Instance
      this.ec2Bastion = new Instance(this, 'EC2BastionInstance', {
        vpc: params.vpcPrefab.vpc,
        vpcSubnets: this.cluster.vpcSubnets,
        role: this.roleBastion,
        securityGroup: this.securityGroupBastion,
        instanceType: InstanceType.of(InstanceClass.T2, InstanceSize.MICRO),
        machineImage: new AmazonLinuxImage({
          generation: AmazonLinuxGeneration.AMAZON_LINUX_2,
        }),
      });
    }

    this.vpcSubnets = this.cluster.vpcSubnets;

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
      securityGroups: [this.securityGroup],
      role: rdsRole,
      ...params.databaseProxyProps,
    });

    // Read-only endpoint
    if ((params.performanceTuning?.readInstances || params.performanceTuning?.readers?.length || 0) > 0) {
      this.readonlyRdsProxyEndpoint = new awsRds.CfnDBProxyEndpoint(this, 'ReadReplicaEndpoint', {
        dbProxyName: this.proxy.dbProxyName,
        dbProxyEndpointName: this.proxy.dbProxyName + '-read-replica',
        vpcSubnetIds: params.vpcPrefab.vpc.selectSubnets(this.cluster.vpcSubnets).subnetIds,
        vpcSecurityGroupIds: [this.securityGroup.securityGroupId],
        targetRole: 'READ_ONLY',
      });
      this.readonlyRdsProxyEndpoint.node.addDependency(this.proxy);
    }

    // Command Execution Parameter
    this.secret = this.cluster.secret!;
    new StringParameter(this, 'Config', {
      simpleName: true,
      parameterName: getResourceName('config', service.props),
      stringValue: JSON.stringify({
        baseDir: params.baseDir || `support/${service.props.serviceName}`.toLowerCase(),
        clusterSecretArn: this.cluster.secret?.secretArn,
        publicAccess: params.publicAccess,
        ...(!params.publicAccess ? { ec2InstanceId: this.ec2Bastion.instanceId } : {}),
      }),
    });

    this.cluster.applyRemovalPolicy(RemovalPolicy.DESTROY);
    if (service.props.envName === 'prod') this.cluster.applyRemovalPolicy(RemovalPolicy.RETAIN);

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
  }

  // Mods
  // public useMod(variableName = 'DB', mods: ((proxy: awsRds.DatabaseProxy) => any)[]): (lambda: NodejsFunction) => void {
  //   return (lambda: NodejsFunction): void => {
  //     lambda.addEnvironment(variableName, this.proxy.endpoint);
  //     mods.map((fn) => fn(this.proxy)(lambda));
  //   };
  // }

  // Class Mods
  // public static modifier = {
  //   connect: (proxy: awsRds.DatabaseProxy): ((lambda: NodejsFunction) =>   NodejsFunction) => {
  //     return (lambda: NodejsFunction): NodejsFunction => {
  //       proxy.grantConnect(lambda);
  //       return lambda;
  //     };
  //   },
  // };

  // public useModWriter(variableName = 'DB'): (lambda: NodejsFunction) => void {
  //   return this.useMod(variableName, [RdsClusterPrefab.modifier.connect]);
  // }
  public useModAccess(access: 'readWrite' | 'readOnly' = 'readWrite', variableName = 'DB'): Modifier {
    return (lambda) => {
      if (!lambda.isBoundToVpc) {
        throw new SynthError('Your lambda must run in the same VPC you passed to this RDSClusterPrefab');
      }
      this.proxy.grantConnect(lambda);
      this.secret.grantRead(lambda);

      if (access === 'readOnly' && this.readonlyRdsProxyEndpoint) {
        lambda.addEnvironment(variableName, this.readonlyRdsProxyEndpoint.attrEndpoint);
      } else {
        lambda.addEnvironment(variableName, this.proxy.endpoint);
      }
    };
  }
}
