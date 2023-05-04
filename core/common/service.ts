import { Stack } from 'aws-cdk-lib';
import { Coordinator, ServiceDependencies } from './coordinator';
import { getDeployConfig } from './naming/get-deploy-config';
import { getServiceName } from './naming/get-service-name';
import { getServiceProps } from './synth/get-service-props';
import { BaseDeployTargetName, BaseServiceProps } from './synth/props-types';
import { SynthError } from './synth/synth-error';
export { Construct } from 'constructs';

type ServiceClass<MyCoord extends Coordinator = Coordinator> = {
  props: MyCoord['globalProps'];
  name: string;
  build(args: any): void;
};

// export type BaseDeps<DepsNames extends readonly string[]> = Record<DepsNames[number], unknown>;
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

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  constructor(
    coordinator: MyCoord,
    name: string,
    dep: typeof ServiceDependencies,
    deployTargetName?: DeployTargetName
  ) {
    super(
      coordinator,
      getServiceName(name, coordinator.globalProps),
      getDeployConfig(coordinator.globalProps, deployTargetName)
    );
    this.props = getServiceProps(name, coordinator.globalProps);
    this.name = name;
    try {
      const d: any = new dep();
      this.depsNames = d.depStore || [];
    } catch {
      throw new SynthError(`Service ${name} invalid dependency`, this.props);
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  abstract build(deps: any): void;
}
