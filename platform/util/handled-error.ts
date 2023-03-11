export class HandledError extends Error {
  constructor(public message: string, public raw: Record<string, any> | string, public statusCode = 500) {
    super(message);
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
  }
}

export class HandledFault extends Error {
  constructor(message: string, ruleName: string) {
    super(message);
    this.name = 'HandledFault';
  }
}
