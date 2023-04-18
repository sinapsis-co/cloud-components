import { BaseServiceProps } from './props-types';

export class SynthError extends Error {
  constructor(public message: string, public props?: BaseServiceProps) {
    super(message);
    this.message = `[${props?.serviceName || 'UnknownService'}] ${message}`;
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
  }
}
