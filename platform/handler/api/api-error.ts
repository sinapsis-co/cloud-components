export class ApiError extends Error {
  public raw: Record<string, any>;
  constructor(public message: string, public statusCode?: number, public description?: string) {
    super(message);
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
    this.raw = {
      message,
      description,
    };
  }
}
