import { IVpc, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

import { getLogicalName } from 'common/naming/get-logical-name';
import { Service } from 'common/service';

export type VpcPrefabParams = {
  name: string;
  maxAzs?: number;
  existingResource?: {
    vpcId: string;
    availabilityZones: string[];
    publicSubnetIds: string[];
    privateSubnetIds: string[];
  };
};

export class VpcPrefab extends Construct {
  public readonly vpc: IVpc;

  constructor(service: Service, params: VpcPrefabParams) {
    super(service, getLogicalName(VpcPrefab.name));

    if (params.existingResource) {
      this.vpc = Vpc.fromVpcAttributes(this, 'vpc', {
        vpcId: params.existingResource.vpcId,
        availabilityZones: params.existingResource.availabilityZones,
        publicSubnetIds: params.existingResource.publicSubnetIds,
        privateSubnetIds: params.existingResource.privateSubnetIds,
      });
      return this;
    }

    this.vpc = new Vpc(this, getLogicalName(params.name, 'vpc'), {
      vpcName: params.name,
      maxAzs: params.maxAzs || 2,
    });
  }
}
