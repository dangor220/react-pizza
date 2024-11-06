import React from 'react';
import { setActiveSize, setActiveType } from '../redux/slices/pizzaSlice';
import { useDispatch, useSelector } from 'react-redux';

type PizzaSelectorProps = {
  id: number;
  types: number[];
  sizes: number[];
  activeType: number;
  activeSize: number;
  handleSelectType?: any;
  handleSelectSize?: any;
};

export default function PizzaSelector({
  id,
  types,
  sizes,
  activeType,
  activeSize,
  handleSelectType,
  handleSelectSize,
}: PizzaSelectorProps): React.ReactNode {
  const { pizzaTypes } = useSelector((state: { pizza: { pizzaTypes: string[] } }) => state.pizza);
  const dispatch = useDispatch();
  return (
    <div className="pizza-block__selector">
      <ul>
        {types.map((type, typeID) => (
          <li
            className={typeID === activeType ? 'active' : ''}
            onClick={() => {
              dispatch(setActiveType({ id, typeID }));
              handleSelectType && handleSelectType(typeID);
            }}
            key={typeID}>
            {pizzaTypes[type]}
          </li>
        ))}
      </ul>
      <ul>
        {sizes.map((size, sizeID) => (
          <li
            className={sizeID === activeSize ? 'active' : ''}
            onClick={() => {
              dispatch(setActiveSize({ id, sizeID }));
              handleSelectSize && handleSelectSize(sizeID);
            }}
            key={sizeID}>
            {size} см.
          </li>
        ))}
      </ul>
    </div>
  );
}
