import { Construct, Service } from '@sinapsis-co/cc-infra-v2/common/service';
import { VpcConstruct } from '@sinapsis-co/cc-infra-v2/services/vpc';

import { GlobalProps } from '../../../config/config-type';

export type EnvVpcParams = Record<string, never>;

export class EnvVpc extends Service<GlobalProps, EnvVpcParams> {
  public readonly vpcConstruct: VpcConstruct;

  constructor(scope: Construct, globalProps: GlobalProps, params: EnvVpcParams) {
    super(scope, EnvVpc.name, globalProps, { params });

    this.vpcConstruct = new VpcConstruct(this, { name: this.props.envName });
  }
}
