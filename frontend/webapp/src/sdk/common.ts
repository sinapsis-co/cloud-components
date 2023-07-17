import { getToken } from './auth';

const API_DOMAIN = process.env.REACT_APP_API_URL || '';

export class ApiException extends Error {
  public errorCode: string;
  public statusCode: number;
  public errorMessage: string;

  constructor(errorCode: string, errorMessage: string, statusCode: number) {
    super(errorMessage);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
}

export type ApiClient = (endpoint: string, method: string, data?: unknown, isPublic?: boolean) => Promise<Response>;

export const getFullUrl = (service: string, endpoint: string): string => `${API_DOMAIN}${service}${endpoint}`;

export const CallApi =
  (service: string): ApiClient =>
  async (endpoint: string, method: string, body?: unknown, isPublic?: boolean) => {
    const token = await getToken();
    const headers = new Headers();

    if (!token && !isPublic) {
      throw new Error('Auth.Error.MissingToken');
    }

    if (token) {
      headers.append('Authorization', token);
    }

    headers.append('Content-Type', 'application/json');

    const params: RequestInit = { method, headers };

    if (body) {
      if (method !== 'GET') {
        params.body = JSON.stringify(body);
      } else {
        endpoint = `${endpoint}?${new URLSearchParams(body as Record<string, string>).toString()}`;
      }
    }

    return fetch(getFullUrl(service, endpoint), params);
  };

export const handleResponse = async (response: Response): Promise<string> => {
  const data = await response.text();

  if (!response.ok) {
    throw new Error(data);
  }

  return data;
};

export const handleJSONResponse = async <T = unknown>(response: Response): Promise<T> => {
  const data = await response.json();

  if (!response.ok) {
    throw new ApiException(data.errorCode, data.errorMessage, response.status);
  }

  return parseCommonFields(data);
};

// eslint-disable-next-line
const parseCommonFields = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map((d) => parseCommonFields(d));
  }

  if ('created_at' in data) {
    data.created_at = new Date(data.created_at);
  }

  if ('updated_at' in data) {
    data.updated_at = new Date(data.updated_at);
  }

  return data;
};
