export type ActiveSortProps = {
  name: string;
  sort: 'rating' | 'price' | 'title';
};

export type FilterSortProps = {
  page: string;
  limit: string;
  sortBy: ActiveSortProps;
  category: string;
  title: string;
  ascendSort: boolean;
};

export interface InitialFilterProps {
  activeCategory: number;
  activeSort: ActiveSortProps;
  ascendSort: boolean;
  selectedPage: number;
  visiblePizzas: number;
  searchValue: string;
}
