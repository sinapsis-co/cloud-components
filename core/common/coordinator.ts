/* eslint-disable no-console */
import { App } from 'aws-cdk-lib';
import { Construct, Service } from './service';
import { getGlobalProps } from './synth/get-global-props';
import {
  BaseDeployTargetName,
  BaseEnvName,
  BaseGlobalConstConfig,
  BaseGlobalDeployTarget,
  BaseGlobalDeployTargetConfig,
  BaseGlobalEnv,
  BaseGlobalEnvConfig,
  BaseGlobalProps,
} from './synth/props-types';
import { SynthError } from './synth/synth-error';

export class Coordinator<
  GlobalConstConfig extends BaseGlobalConstConfig = BaseGlobalConstConfig,
  AllowedEnvName extends BaseEnvName = BaseEnvName,
  GlobalEnv extends BaseGlobalEnv = BaseGlobalEnv,
  GlobalDeployTarget extends BaseGlobalDeployTarget = BaseGlobalDeployTarget
> extends App {
  public scope: Construct;
  public globalProps: BaseGlobalProps<GlobalConstConfig, GlobalEnv, GlobalDeployTarget>;
  private serviceList: Service[];
  private services: Record<Service['name'], Service>;

  constructor(
    globalConstConfig: GlobalConstConfig,
    globalEnvConfig: BaseGlobalEnvConfig<AllowedEnvName, GlobalEnv>,
    globalDeployTargetConfig: BaseGlobalDeployTargetConfig<AllowedEnvName, BaseDeployTargetName>
  ) {
    super({ autoSynth: false });
    this.globalProps = getGlobalProps(this, globalConstConfig, globalEnvConfig, globalDeployTargetConfig);
    this.serviceList = [];
    this.services = {};
  }

  public addService(service: Service): void {
    service.depsNames = service.depsNames.map((d) => `${d.charAt(0).toUpperCase()}${d.slice(1)}`);
    this.serviceList.push(service);
    this.services[service.name] = service;
  }

  public build(): void {
    try {
      const ordererServiceList = this.orderDependencies();
      ordererServiceList.map((l) => {
        const service = this.services[l];
        const deps: Record<string, Service> = service.depsNames.reduce((memo, cu) => {
          const name = `${cu.charAt(0).toLowerCase()}${cu.slice(1)}`;
          memo[name] = this.services[cu];
          return memo;
        }, {});
        service.build(deps);
      });
      this.synth();
    } catch (error: any) {
      console.log('ServiceBuildFailed: Missing dependency error (Did you forget adding @DepCheck() decorator?)');
      console.log(error);
      process.exit(1);
    }
  }

  private orderDependencies(): string[] {
    const nodeMap = new Map<string, Service>();
    const visited = new Set<string>();
    const visiting = new Set<string>();
    const result: string[] = [];
    const serviceNames = this.serviceList.map((s) => s.name);
    this.serviceList.forEach((node) => {
      node.depsNames = node.depsNames.map((d) => {
        if (!serviceNames.includes(d)) throw new SynthError(`Dependency ${d}, in ${node.name} doesn't exist`);
        return d;
      });
      nodeMap.set(node.name, node);
    });
    this.serviceList.forEach((n) => visit(n));
    function visit(node: Service) {
      if (!node) return;
      if (visited.has(node.name)) return;
      if (visiting.has(node.name)) throw new Error(`Circular dependency detected for node ${node.name}`);
      visiting.add(node.name);
      node.depsNames.forEach((depId) => {
        if (!visited.has(depId)) visit(nodeMap.get(depId)!);
      });
      visiting.delete(node.name);
      visited.add(node.name);
      result.push(node.name);
    }

    return result;
  }
}

export function DepCheck() {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function (target: any, propertyKey: any) {
    // Define the _propertyMap dict if it doesn't exist yet
    if (!target.depStore) {
      target.depStore = [];
    }
    // Store the decorated property's value in the _propertyMap dict
    target.depStore.push(propertyKey);
  };
}

export class ServiceDependencies {
  // depStore: string[] = [];
}
