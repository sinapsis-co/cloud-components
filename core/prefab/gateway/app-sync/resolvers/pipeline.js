// The before step
export function request() {
  return {};
}

// The after step
export function response(ctx) {
  return ctx.prev.result;
}
