export type RenderRequest = {
  name: 'render-request';
  payload: any;
};

export type RenderPage<SearchType = string> = {
  entity: SearchType;
  uriGenerationFn: (...args: any[]) => string;
};
