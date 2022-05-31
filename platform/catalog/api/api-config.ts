import { Schemy } from 'schemy-ts';
import { ApiInterface, ApiInterfaceRequest } from './api-interface';

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type TablePermission = 'read' | 'write' | 'readWrite' | 'none';

export type ApiConfig<T extends ApiInterface> = {
  name: string;
  basePath: string;
  path: string;
  method: ApiMethod;
  isPublic?: true;
  baseUrl?: string;
  scope?: string;
  schema?: Schemy;
  tablePermission?: TablePermission;
  authorizationMdw?: (request: ApiInterfaceRequest<T>, scope?: string) => void;
};
