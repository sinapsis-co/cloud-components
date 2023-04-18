/* eslint-disable @typescript-eslint/ban-types */
import { BaseGlobalProps, BaseServiceProps, BaseServiceDependencies } from './props-types';

export const getServiceProps = <
  GlobalProps extends BaseGlobalProps = BaseGlobalProps,
  ServiceDependencies extends BaseServiceDependencies = BaseServiceDependencies
>(
  serviceName: string,
  globalProps: GlobalProps,
  serviceDependencies: ServiceDependencies = {} as ServiceDependencies
): BaseServiceProps<GlobalProps, ServiceDependencies> => {
  return {
    serviceName,
    ...globalProps,
    ...serviceDependencies,
  };
};
