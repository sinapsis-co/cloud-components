import { BaseServiceProps } from '../synth/props-types';

type GetDomainParams = {
  envDomainName?: BaseServiceProps['envDomainName'];
  ephemeralEnvName?: BaseServiceProps['ephemeralEnvName'];
};

export const getDomain = (
  subdomain: string,
  { envDomainName, ephemeralEnvName }: GetDomainParams,
  includeProtocol?: boolean
): string => {
  if (!envDomainName) throw new Error('Missing envDomainName in config');
  const preFix = subdomain ? `${subdomain}.` : '';
  const protocolPreFix = includeProtocol ? `https://${preFix}` : preFix;
  const posFix = ephemeralEnvName ? `${ephemeralEnvName}.${envDomainName}` : envDomainName;
  return `${protocolPreFix}${posFix}`;
};
