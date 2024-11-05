import { useState } from 'react';
import { setActiveCategory, setSelectedPage } from '../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

export default function Categories({ activeCategory }) {
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
              dispatch(setSelectedPage(1));
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
