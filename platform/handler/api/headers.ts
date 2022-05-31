const MAX_AGE = 10;

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Cache-Control': `max-age=${MAX_AGE}`,
};

export const DEFAULT_HEADERS = {
  ...CORS_HEADERS,
  'Content-Type': 'application/json',
};
