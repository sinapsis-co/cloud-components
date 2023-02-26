import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { getLogicalName } from '../../common/naming/get-logical-name';

import { Service } from '../../common/service';

export type VpcConstructParams = {
  name: string;
  maxAzs?: number;
};

export class VpcConstruct extends Construct {
  public readonly vpc: Vpc;

  constructor(service: Service, params: VpcConstructParams) {
    super(service, getLogicalName(VpcConstruct.name));

    this.vpc = new Vpc(this, getLogicalName(params.name, 'vpc'), {
      vpcName: params.name,
      maxAzs: params.maxAzs || 2,
    });
  }
}
