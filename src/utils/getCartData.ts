import { CartItems, InitialCartProps } from '../redux/slices/cartSlice';

export default function getCartData(): InitialCartProps {
  let data = localStorage.getItem('cart');

  if (!data) {
    return {
      items: {},
      totalPrice: 0,
      totalCount: 0,
    };
  }

  let cartData: CartItems = JSON.parse(data);
  let totalPrice = 0;
  let totalCount = 0;

  Object.values(cartData).forEach((items) => {
    totalPrice += items.reduce((acc, item) => (acc += item.price * item.count), 0);
    totalCount += items.length;
  });

  return {
    items: cartData,
    totalPrice,
    totalCount,
  };
}
