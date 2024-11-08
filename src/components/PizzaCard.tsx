import React, { useEffect } from 'react';
import { fetchPizza, setResultPrice } from '../redux/slices/pizzaSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import PizzaSelector from './PizzaSelector';
import { AppDispatch } from '../redux/store';
import { BackButton } from './BackButton';
import PizzaCardSkeleton from './PizzaCardSkeleton';

type PizzaState = {
  pizza: {
    items: [];
    pizzaItem: {
      id: number;
      imageUrl: string;
      title: string;
      description: string;
      price: number[];
      types: number[];
      sizes: number[];
    };
    pizzaProps: {
      [id: number | string]: {
        activeSize: number;
        activeType: number;
        resultPrice: number;
      };
    };
    pizzaStatus: 'loading' | 'success' | 'error';
    status: 'loading' | 'success' | 'error';
    error: string | null;
    totalPages: number;
    pizzaTypes: string[];
    pizzaSizes: number[];
  };
};
type CartProps = {
  imageUrl: string;
  title: string;
  price: number;
  type: string;
  size: number;
  count: number;
};
type CurrentPizzaProps = {
  cart: {
    items: {
      [id: number | string]: CartProps[];
    };
  };
};

export default function PizzaCard(): React.ReactNode {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { pizzaItem, pizzaProps, pizzaStatus, error, pizzaTypes, pizzaSizes } = useSelector(
    (state: PizzaState) => state.pizza,
  );
  if (!id) {
    return <>Загрузка...</>;
  }
  const currentPizza = useSelector((state: CurrentPizzaProps) => state.cart.items[id]);

  useEffect(() => {
    dispatch(fetchPizza(id));
  }, []);

  const onClickAdd = () => {
    const item = {
      id: pizzaItem.id,
      imageUrl: pizzaItem.imageUrl,
      title: pizzaItem.title,
      price: pizzaProps[id].resultPrice,
      type: pizzaTypes[pizzaProps[id].activeType],
      size: pizzaSizes[pizzaProps[id].activeSize],
    };

    dispatch(addItem(item));
  };

  const getCount = () =>
    currentPizza.reduce((sum: number, item: { count: number }) => (sum += item.count), 0);

  if (pizzaStatus === 'error') {
    alert(`Ошибка получения данных! ${error} Вернуться на страницу.`);
    navigate('/');
  }

  return pizzaStatus === 'success' ? (
    <>
      <div className="pizza__card">
        <div className="pizza__image">
          <img src={pizzaItem.imageUrl} alt={pizzaItem.title} />
        </div>
        <div className="pizza__info">
          <h2 className="pizza__title">{pizzaItem.title}</h2>
          <p className="pizza__description">{pizzaItem.description}</p>
          <PizzaSelector
            id={+id}
            types={pizzaItem.types}
            sizes={pizzaItem.sizes}
            activeSize={pizzaProps[id].activeSize}
            activeType={pizzaProps[id].activeType}
            handleSelectType={(typeID: number) => {
              dispatch(
                setResultPrice({
                  id,
                  price: pizzaItem.price[pizzaProps[id].activeSize] + (typeID + 0) * 50,
                }),
              );
            }}
            handleSelectSize={(sizeID: number) => {
              dispatch(
                setResultPrice({
                  id,
                  price: pizzaItem.price[sizeID] + (pizzaProps[id].activeType + 0) * 50,
                }),
              );
            }}
          />
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">
              <span>Цена:</span> {pizzaProps[id].resultPrice} ₽
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
              {currentPizza?.length && <i>{getCount()}</i>}
            </div>
          </div>
        </div>
      </div>
      <div className="cart__bottom-buttons">
        <BackButton />
      </div>
    </>
  ) : (
    <PizzaCardSkeleton />
  );
}
