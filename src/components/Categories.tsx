import React, { useCallback, useState } from 'react';
import { setActiveCategory, setSelectedPage } from '../redux/slices/filter/slice';
import { useDispatch } from 'react-redux';

type ActiveCategoryProps = {
  activeCategory: number;
};

export default React.memo(function Categories({
  activeCategory,
}: ActiveCategoryProps): React.ReactNode {
  const [isListOpen, setIsListOpen] = useState(false);

  const dispatch = useDispatch();

  const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const handleClickBurger = (): void => {
    const userView: boolean = window.innerWidth <= 568;
    if (userView) {
      setIsListOpen(!isListOpen);
    }
  };
  const onChangeCategory = useCallback((categoryID: number) => {
    dispatch(setSelectedPage(1));
    dispatch(setActiveCategory(categoryID));
  }, []);

  return (
    <div
      className={isListOpen ? 'categories categories_active' : 'categories'}
      onClick={handleClickBurger}>
      <ul>
        {categories.map((category, categoryID) => (
          <li
            className={activeCategory === categoryID ? 'active' : ''}
            onClick={() => {
              onChangeCategory(categoryID);
            }}
            key={categoryID}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
});
