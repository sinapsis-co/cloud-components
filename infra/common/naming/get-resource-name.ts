import { BaseServiceProps } from '../synth/props-types';
import { toDashCase, toSnakeCase } from './string-parser';

type GetResourceNameParams = {
  projectName: BaseServiceProps['projectName'];
  envName: BaseServiceProps['envName'];
  ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
  serviceName: BaseServiceProps['serviceName'];
  isSingleProjectAccount?: BaseServiceProps['isSingleProjectAccount'];
};

type GetShortResourceNameParams = {
  projectShortName: BaseServiceProps['projectShortName'];
  envName: BaseServiceProps['envName'];
  ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
  serviceName: BaseServiceProps['serviceName'];
  isSingleProjectAccount?: BaseServiceProps['isSingleProjectAccount'];
};

export const getResourceName = (
  resourceName: string,
  { isSingleProjectAccount, projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const project = isSingleProjectAccount ? '' : `${toDashCase(projectName)}-`;
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  const resource =
    resourceName && serviceName.toLocaleLowerCase() !== resourceName.toLocaleLowerCase()
      ? `-${toDashCase(resourceName)}`
      : '';
  return `${project}${toDashCase(env)}-${toDashCase(serviceName)}${resource}`;
};

export const getShortResourceName = (
  resourceName: string,
  { isSingleProjectAccount, projectShortName, envName, ephemeralEnvName, serviceName }: GetShortResourceNameParams
): string => {
  const project = isSingleProjectAccount ? '' : `${toDashCase(projectShortName)}-`;
  const env = ephemeralEnvName ? `${envName}-${ephemeralEnvName}` : envName;
  const shortServiceName = serviceName.toLowerCase().includes('service')
    ? serviceName.toLowerCase().split('service')[0]
    : serviceName;
  const resource =
    resourceName && serviceName.toLocaleLowerCase() !== resourceName.toLocaleLowerCase()
      ? `-${toDashCase(resourceName)}`
      : '';
  return `${project}${toDashCase(env)}-${toDashCase(shortServiceName)}${resource}`;
};

export const getDatabaseName = (
  resourceName: string,
  { isSingleProjectAccount, projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const project = isSingleProjectAccount ? '' : `${toDashCase(projectName)}-`;
  const env = ephemeralEnvName ? `${envName}_${ephemeralEnvName}` : envName;
  const resource = resourceName && serviceName !== resourceName ? `_${toSnakeCase(resourceName)}` : '';
  return `${project}${toSnakeCase(env)}_${toSnakeCase(serviceName)}${resource}`;
};

export const getCloudFrontName = (
  resourceType: string,
  resourceName: string,
  { projectName, envName, ephemeralEnvName, serviceName }: GetResourceNameParams
): string => {
  const arr = [projectName, envName, ephemeralEnvName, serviceName, resourceType, resourceName].map((a) =>
    a ? `${a.charAt(0).toUpperCase()}${a.slice(1)}` : ''
  );
  return arr.join('');
};

export const getBucketName = (
  bucketName: string,
  {
    envDomainName,
    ephemeralEnvName,
    serviceName,
  }: {
    envDomainName: BaseServiceProps['envDomainName'];
    ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
    serviceName: BaseServiceProps['serviceName'];
  }
): string => {
  const preFix = bucketName === serviceName ? bucketName : `${serviceName}.${bucketName}`;
  const posFix = ephemeralEnvName ? `${ephemeralEnvName}.${envDomainName}` : envDomainName;
  return `${preFix}.${posFix}`.toLowerCase();
};
