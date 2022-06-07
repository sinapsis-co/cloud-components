import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { getDeployConfig } from '@sinapsis-co/cc-infra-v2/common/naming/get-deploy-config';
import { getServiceName } from '@sinapsis-co/cc-infra-v2/common/naming/get-service-name';
import { getServiceProps } from '@sinapsis-co/cc-infra-v2/common/synth/get-service-props';
import {
  BaseGlobalProps,
  BaseServiceDependencies,
  BaseServiceProps,
} from '@sinapsis-co/cc-infra-v2/common/synth/props-types';

export { Construct } from 'constructs';

export class Service<
  GlobalProps extends BaseGlobalProps = BaseGlobalProps,
  ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies
> extends Stack {
  public readonly scope: Construct;
  public readonly props: BaseServiceProps<GlobalProps, ServiceDependencies>;

  constructor(scope: Construct, name: string, globalProps: GlobalProps, deps: ServiceDependencies) {
    super(scope, getServiceName(name, globalProps), getDeployConfig(globalProps));

    this.scope = scope;
    this.props = getServiceProps(name, globalProps, deps);
  }
}
