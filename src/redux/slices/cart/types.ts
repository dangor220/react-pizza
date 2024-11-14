export type CartItem = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};

export type CartItems = {
  [id: number]: CartItem[];
};

export interface InitialCartProps {
  totalCount: number;
  totalPrice: number;
  items: CartItems;
}
