import { Stack } from 'aws-cdk-lib';
import { Coordinator } from './coordinator';
import { getDeployConfig } from './naming/get-deploy-config';
import { getServiceName } from './naming/get-service-name';
import { getServiceProps } from './synth/get-service-props';
import { BaseDeployTargetName, BaseServiceDependencies, BaseServiceProps } from './synth/props-types';

export { Construct } from 'constructs';

export type ServiceOptionalParams<ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies> = {
  deps?: ServiceDependencies;
  deployConfigName?: string;
};

type ServiceClass<MyCoord extends Coordinator = Coordinator> = {
  props: MyCoord['globalProps'];
  name: string;
  build(args: any): void;
};

export type BaseDeps<DepsNames extends readonly string[]> = Record<DepsNames[number], unknown>;
export abstract class Service<
    MyCoord extends Coordinator = Coordinator,
    DeployTargetName extends BaseDeployTargetName = BaseDeployTargetName
  >
  extends Stack
  implements ServiceClass<MyCoord>
{
  public readonly props: BaseServiceProps<MyCoord['globalProps']>;
  public readonly name: string;
  public depsNames: string[];

  constructor(coordinator: MyCoord, name: string, depsNames: string[], deployTargetName?: DeployTargetName) {
    super(
      coordinator,
      getServiceName(name, coordinator.globalProps),
      getDeployConfig(coordinator.globalProps, deployTargetName)
    );
    this.props = getServiceProps(name, coordinator.globalProps);
    this.name = name;
    this.depsNames = depsNames;
  }

  // abstract class Service<T extends readonly string[]> {
  //   constructor(protected readonly depsNames: T) {}

  //   abstract build<K extends T[number]>(obj: Pick<ValidatedObject<T>, K>): unknown;
  // }
  //
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // abstract build(deps: { [key in DepsNames[number]]: unknown }): void;
  // abstract build(deps: Record<typeof this.depsNames[number], unknown>): void;
  // abstract build(deps: Record<DepsNames[number], unknown>): void;
  abstract build(deps: any): void;
  // abstract build(deps: { [key in typeof this.depsNames[number]]: unknown }): void;
  // abstract build<T extends Record<typeof this.depsNames[number], unknown> = T>(deps: T): void;
  // abstract build<K extends DepsNames[number]>(deps: Record<K, unknown>): Record<K, unknown>;
  // abstract build<K extends DepsNames[number]>(obj: Pick<ValidatedObject<DepsNames>, K>): unknown;
}
