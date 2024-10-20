import { useState } from 'react';

export default function Categories({ activeCategory, setActiveCategory }) {
  const [isListOpen, setIsListOpen] = useState(false);

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
              setActiveCategory(categoryID);
            }}
            key={categoryID}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
