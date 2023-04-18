import { BaseGlobalProps } from '../synth/props-types';
import { capFirstLetter } from './string-parser';

type GetServiceNameParams = {
  projectName: BaseGlobalProps['projectName'];
  envName: BaseGlobalProps['envName'];
  ephemeralEnvName?: BaseGlobalProps['ephemeralEnvName'];
};

export const getServiceName = (
  genericServiceName: string,
  { projectName, envName, ephemeralEnvName }: GetServiceNameParams
): string => {
  const env = ephemeralEnvName
    ? `${capFirstLetter(envName)}-${capFirstLetter(ephemeralEnvName)}`
    : capFirstLetter(envName);
  return `${capFirstLetter(projectName)}-${env}-${capFirstLetter(genericServiceName)}`;
};
