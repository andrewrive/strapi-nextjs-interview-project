export interface IPaginatedResponse<T> {
  data: T;
  meta: {
    pagination: IPagination;
  };
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
