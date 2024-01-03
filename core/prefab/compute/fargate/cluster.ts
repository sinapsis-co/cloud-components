import * as awsECS from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { getResourceName } from 'common/naming/get-resource-name';
import { Service } from 'common/service';

import { VpcPrefab } from 'prefab/networking/vpc';

export type FargateClusterPrefabParams = {
  name: string;
  vpcPrefab: VpcPrefab;
};

export class FargateClusterPrefab extends Construct {
  public readonly cluster: awsECS.Cluster;

  constructor(service: Service, params: FargateClusterPrefabParams) {
    super(service, getLogicalName(params.name, FargateClusterPrefab.name));

    this.cluster = new awsECS.Cluster(this, getLogicalName(params.name, 'cluster'), {
      containerInsights: true,
      clusterName: getResourceName('cluster', { ...service.props, serviceName: params.name }),
      vpc: params.vpcPrefab.vpc,
    });
  }
}
