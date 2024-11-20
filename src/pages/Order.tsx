import React, { useState } from 'react';
import InputMask from '@mona-health/react-input-mask';
import { useForm, ValidationError } from '@formspree/react';
import { useSelector } from 'react-redux';
import { CartItem, CartState } from './Cart';
import SuggestAddr from '../components/SuggestAddr';

type CartItems = {
  [id: number]: CartItem[];
};

export default function Order(): React.ReactNode {
  const cart = useSelector((state: CartState) => state.cart);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comments: '',
  });

  const formatCartItems = (cartItems: CartItems) => {
    const lines: string[] = [];
    Object.keys(cartItems).forEach((id) => {
      cartItems[+id].forEach((item) => {
        const line = `${item.title} (тесто ${item.type}, ${item.size} см): ${item.count} шт. x ${
          item.price
        } ₽ = ${item.count * item.price} ₽`;
        lines.push(line);
      });
    });
    return lines.join('\n');
  };

  const [state, handleSubmit] = useForm('xzzbvddb', {
    data: {
      orderSummary: formatCartItems(cart.items),
      totalPrice: String(cart.totalPrice),
      totalCount: String(cart.totalCount),
    },
  });

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="order-container">
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="order-columns">
          <div className="form-fields">
            <h2>Оформление заказа</h2>
            <div className="form-group">
              <label htmlFor="name">
                Имя <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Телефон <span className="required">*</span>
              </label>
              <InputMask
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                required
                mask="+7 (999) 999-99-99"
                value={formData.phone}
                onChange={handleChange}></InputMask>

              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="address">
                Адрес <span className="required">*</span>
              </label>
              <SuggestAddr />
              <ValidationError prefix="Address" field="address" errors={state.errors} />
            </div>

            <div className="form-group">
              <label htmlFor="comments">Комментарий</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Комментарий к заказу"
              />
              <ValidationError prefix="Comments" field="comments" errors={state.errors} />
            </div>
          </div>

          <div className="order-summary">
            <h3>Ваш заказ</h3>
            <ul>
              {Object.keys(cart.items).map((key) =>
                cart.items[+key].map((item, index) => (
                  <li key={`${key}-${index}`}>
                    <img src={item.imageUrl} alt={item.title} className="pizza-image" />
                    <div className="pizza-details">
                      <span>{item.title}</span>
                      <span>
                        Тесто {item.type}, {item.size} см
                      </span>
                      <span>Количество: {item.count} шт.</span>
                      <span>Цена за 1 шт: {item.price} ₽</span>
                    </div>
                    <div className="item-total">
                      <strong>Всего:</strong> {item.price * item.count} ₽
                    </div>
                  </li>
                )),
              )}
            </ul>

            <div className="total">
              <strong>Итого:</strong>
              <span>{cart.totalPrice} ₽</span>
            </div>
            <div className="form-submit">
              <button className="btn-submit" disabled={state.submitting} type="submit">
                Подтвердить заказ
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
