import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice.js';
import { setResultPrice } from '../redux/slices/pizzaSlice.js';
import { useNavigate } from 'react-router-dom';
import PizzaSelector from './PizzaSelector.jsx';

type PizzaBlockProps = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number[];
  category: number;
  rating: number;
};
type CartStore = {
  cart: {
    items: {
      [id: number]: [];
    };
  };
};
type PizzaStore = {
  pizza: {
    pizzaTypes: string[];
    pizzaSizes: number[];
  };
};
type PizzaStoreById = {
  pizza: {
    pizzaProps: {
      [id: number]: {
        activeSize: number;
        activeType: number;
        resultPrice: number;
      };
    };
  };
};

export default function PizzaBlock({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}: PizzaBlockProps): React.ReactNode {
  const currentPizza = useSelector((state: CartStore) => state.cart.items[id]);
  const { pizzaTypes, pizzaSizes } = useSelector((state: PizzaStore) => state.pizza);
  const { activeSize, activeType, resultPrice } = useSelector(
    (store: PizzaStoreById) => store.pizza.pizzaProps[id],
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      setResultPrice({
        id,
        price: price[activeSize] + (activeType + 0) * 50,
      }),
    );
  }, [activeSize, activeType]);

  const getCount = (): number => {
    if (currentPizza) {
      return currentPizza.reduce((sum: number, item: { count: number }) => (sum += item.count), 0);
    } else {
      return 0;
    }
  };

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      price: resultPrice,
      type: pizzaTypes[activeType],
      size: pizzaSizes[activeSize],
    };

    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <div
          className="pizza-info"
          onClick={() => {
            navigate(`pizza/` + id);
          }}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </div>

        <PizzaSelector
          id={id}
          types={types}
          sizes={sizes}
          activeSize={activeSize}
          activeType={activeType}
        />
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">
            <span>Цена:</span> {resultPrice} ₽
          </div>
          <div className="button button--outline button--add" onClick={onClickAdd}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {getCount() > 0 && <i>{getCount()}</i>}
          </div>
        </div>
      </div>
    </div>
  );
}
