// This file contains the input configuration for the Material UI theme.
export type InputTypes = 'standard' | 'filled' | 'outlined';
const inputVariant: InputTypes = 'outlined';

type InputSizeTypes = 'small' | 'medium' | undefined;
const inputSize: InputSizeTypes = 'medium';

export { inputSize, inputVariant };
