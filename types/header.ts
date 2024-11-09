export type RouteParams = {
  pathname: string;
  searchQuery?: string | null;
  segments?: string[];
};

export type RouteConfig = {
  pattern: RegExp | string;
  getTitle: (params: RouteParams) => string;
};
