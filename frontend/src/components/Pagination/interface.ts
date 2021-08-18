export interface IPagination {
  currentPage: number;
  postsPerPage: number;
  onChange(page: number): void;
}
