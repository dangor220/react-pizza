import { useState } from 'react';
import { setActiveCategory } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Categories({ activeCategory, setSelectedPage }) {
  const [isListOpen, setIsListOpen] = useState(false);

  const dispatch = useDispatch();

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const handleClickBurger = () => {
    const userView = window.innerWidth <= 568;
    if (userView) {
      setIsListOpen(!isListOpen);
    }
  };

  return (
    <div
      className={isListOpen ? 'categories categories_active' : 'categories'}
      onClick={handleClickBurger}>
      <ul>
        {categories.map((category, categoryID) => (
          <li
            className={activeCategory === categoryID ? 'active' : ''}
            onClick={() => {
              setSelectedPage(1);
              dispatch(setActiveCategory(categoryID));
            }}
            key={categoryID}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
