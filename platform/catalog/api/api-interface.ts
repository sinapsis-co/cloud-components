export type EmptyObject = Record<string, null>;

export type ApiInterfaceKeys = {
  response: unknown;
  body: unknown;
  pathParams: Record<string, unknown>;
  queryParams: Record<string, unknown>;
  claims: Record<string, unknown>;
};

export type ApiInterfaceExtendedKeys = ApiInterfaceKeys & {
  headers: Record<string, unknown>;
};

export type ApiInterface<keys extends ApiInterfaceKeys = ApiInterfaceKeys> = {
  response: keys['response'];
  body: keys['body'];
  pathParams: keys['pathParams'];
  queryParams: keys['queryParams'];
  claims: keys['claims'];
};

export type ApiInterfaceExtended<keys extends ApiInterfaceExtendedKeys = ApiInterfaceExtendedKeys> = {
  response: keys['response'];
  body: keys['body'];
  pathParams: keys['pathParams'];
  queryParams: keys['queryParams'];
  claims: keys['claims'];
  headers: keys['headers'];
};

type OmittedProps<T extends ApiInterfaceKeys> = Pick<ApiInterface<T>, 'response'>;
export type ApiInterfaceRequest<T extends ApiInterfaceKeys = ApiInterfaceKeys> = Omit<
  ApiInterface<T>,
  keyof OmittedProps<T>
>;

export type PaginatedQueryParams = {
  limit?: string;
  nextToken?: string;
};

export type PaginatedResponse<ResponseType> = {
  items: ResponseType[];
  nextToken: string | number | null;
};
