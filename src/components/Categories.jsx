import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
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
