import { BaseServiceProps } from '../synth/props-types';
import { toDashCase, toSnakeCase } from './string-parser';

type GetResourceNameParams = {
  projectName: BaseServiceProps['projectName'];
  envName: BaseServiceProps['envName'];
  ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
  serviceName: BaseServiceProps['serviceName'];
  envDomainName?: BaseServiceProps['envDomainName'];
};

export const getResourceName = (
  resourceName: string,
  { projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  const resource = resourceName && serviceName !== resourceName ? `-${toDashCase(resourceName)}` : '';
  return `${toDashCase(projectName)}-${toDashCase(env)}-${toDashCase(serviceName)}${resource}`;
};

export const getBucketName = (
  bucketName: string,
  { envDomainName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const preFix = bucketName === serviceName ? bucketName : `${serviceName}.${bucketName}`;
  const posFix = ephemeralEnvName ? `${ephemeralEnvName}.${envDomainName}` : envDomainName;
  return `${preFix}.${posFix}`.toLowerCase();
};

type GetShortResourceNameParams = {
  projectShortName: BaseServiceProps['projectShortName'];
  envName: BaseServiceProps['envName'];
  ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
  serviceName: BaseServiceProps['serviceName'];
};

export const getShortResourceName = (
  resourceName: string,
  { projectShortName, envName, ephemeralEnvName, serviceName }: GetShortResourceNameParams
): string => {
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  const shortServiceName = serviceName.toLowerCase().includes('service')
    ? serviceName.toLowerCase().split('service')[0]
    : serviceName;
  const resource = resourceName && serviceName !== resourceName ? `-${toDashCase(resourceName)}` : '';
  return `${projectShortName.toLowerCase()}-${toDashCase(env)}-${toDashCase(shortServiceName)}${resource}`;
};

export const getParameterName = (
  resourceName: string,
  { projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  return `/${toDashCase(projectName)}/${toDashCase(env)}/${toDashCase(serviceName)}/${toDashCase(resourceName)}`;
};
export const getParameterNamePlain = (
  resourceName: string,
  { projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  return `/${toDashCase(projectName)}/${toDashCase(env)}/${toDashCase(serviceName)}/${resourceName}`;
};

export const getDatabaseName = (
  resourceName: string,
  { projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const env = ephemeralEnvName ? `${envName}_${ephemeralEnvName}` : envName;
  const resource = resourceName && serviceName !== resourceName ? `_${toSnakeCase(resourceName)}` : '';
  return `${toSnakeCase(projectName)}_${toSnakeCase(env)}_${toSnakeCase(serviceName)}${resource}`;
};
