import { existsSync } from 'fs';
import { BaseServiceProps } from '../synth/props-types';
import { SynthError } from '../synth/synth-error';

export const getFunctionEntry = (
  baseFunctionFolder: string,
  name: string,
  compiled?: boolean,
  props?: BaseServiceProps
): string => {
  const ext = compiled === true ? 'js' : 'ts';
  const entry = `${baseFunctionFolder}/handlers/${name}/handler.${ext}`.toLowerCase();
  if (!existsSync(entry)) throw new SynthError(`Handler ${entry} for ${name} doesn't exist`, props);
  return entry;
};
