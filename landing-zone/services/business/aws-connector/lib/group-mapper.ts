import { EnvPermission } from '../entities/aws-user';

export const groupMapper = (envName: EnvPermission): string => {
  const envs: Record<EnvPermission, string> = {
    dev: 'SinapsisDevGroup',
    staging: 'SinapsisDevGroupStaging',
    prod: 'SinapsisDevGroupProd',
  };
  return envs[envName];
};
