import { Stack } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { getDeployConfig } from './naming/get-deploy-config';
import { getServiceName } from './naming/get-service-name';
import { getServiceProps } from './synth/get-service-props';
import { BaseGlobalProps, BaseServiceDependencies, BaseServiceProps } from './synth/props-types';

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
