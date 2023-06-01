/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlatformError, PlatformFault } from 'error/index';

/* eslint-disable no-console */
export {};

const types = {
  api: (claims, event: string) => {
    return {
      headers: { 'X-Request-ID': '1234' },
      body: event,
      requestContext: { authorizer: { jwt: { claims: JSON.parse(claims) } } },
    };
  },
  event: (_, event: string) => {
    return {
      detail: JSON.parse(event),
    };
  },
};

(async () => {
  try {
    const [path, type, claims, event] = process.argv.slice(2);

    const imported = await import(`${path}`);
    const result = await imported.handler(types[type](claims, event));
    if (type === 'api') console.log(JSON.parse(result.body));
    else console.log(result);
    process.exit(0);
  } catch (error: any) {
    if (error instanceof PlatformError || error instanceof PlatformFault) {
      console.error(error.returnException());
    } else {
      new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message }).returnException();
    }
    process.exit(0);
  }
})();
