export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type PizzaItemProps = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
};
export interface InitialPizzaProps {
  items: PizzaItemProps[];
  pizzaItem: PizzaItemProps | {};
  pizzaProps: {
    [id: number]: {
      activeSize: number;
      activeType: number;
      resultPrice: number;
    };
  };
  pizzaStatus: Status;
  status: Status;
  error: string | undefined;
  totalPages: number;
  pizzaTypes: string[];
  pizzaSizes: number[];
}

export type FetchPizzasProps = {
  activeCategory: number;
  activeSort: { name: string; sort: string };
  selectedPage: number;
  visiblePizzas: number;
  ascendSort: boolean;
  searchValue: string;
};
export type PizzaDataProps = {
  meta: {
    current_page: number;
    per_page: number;
    remaining_count: number;
    total_items: number;
    total_pages: number;
  };
  items: PizzaItemProps[];
};
