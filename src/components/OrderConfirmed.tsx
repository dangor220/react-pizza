import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearItems } from '../redux/slices/cart/slice';

const OrderConfirmed: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="order-confirmed">
      <h2 className="order-confirmed__title">Ваш заказ принят!</h2>
      <p className="order-confirmed__description">
        Спасибо за ваш заказ! Мы уже приступили к его обработке. В ближайшее время наш менеджер
        свяжется с вами для уточнения удобного способа оплаты и подтверждения деталей доставки.
      </p>
      <Link
        to="/"
        className="order-confirmed__button"
        onClick={() => {
          dispatch(clearItems());
        }}>
        Вернуться к меню
      </Link>
    </div>
  );
};

export default OrderConfirmed;
