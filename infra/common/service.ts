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

export type ServiceOptionalParams<ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies> = {
  params?: ServiceDependencies;
  deployConfigName?: string;
};

export class Service<
  GlobalProps extends BaseGlobalProps = BaseGlobalProps,
  ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies
> extends Stack {
  public readonly stack: Stack;
  public readonly scope: Construct;
  public readonly props: BaseServiceProps<GlobalProps, ServiceDependencies>;

  constructor(
    scope: Construct,
    name: string,
    globalProps: GlobalProps,
    deps: ServiceOptionalParams<ServiceDependencies>
  ) {
    super(scope, getServiceName(name, globalProps), getDeployConfig(globalProps, deps.deployConfigName));
    this.props = getServiceProps(name, globalProps, deps.params);
    this.scope = scope;
  }
}
