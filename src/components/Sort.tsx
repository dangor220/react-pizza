import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSort, setAscendSort } from '../redux/slices/filter/slice';
import { ActiveSortProps } from '../redux/slices/filter/types';

type SortByProps = ActiveSortProps[];

export const sortBy: SortByProps = [
  { name: 'популярности', sort: 'rating' },
  { name: 'цене', sort: 'price' },
  { name: 'алфавиту', sort: 'title' },
];

type SortProps = { activeSort: ActiveSortProps; ascendSort: boolean };

export default React.memo(function Sort({ activeSort, ascendSort }: SortProps): React.ReactNode {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setPopupIsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();

  const onClickSortType = (type: ActiveSortProps) => {
    dispatch(setActiveSort(type));
    setPopupIsOpen(false);
  };

  const handleTypeSort = () => {
    dispatch(setAscendSort());
  };

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <div className="sort__type" onClick={handleTypeSort}>
          {ascendSort ? (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                fill="#2C2C2C"
              />
            </svg>
          ) : (
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 1C0 0.830729 0.0618486 0.684245 0.185547 0.560547C0.309245 0.436849 0.455729 0.375 0.625 0.375H9.375C9.54427 0.375 9.69076 0.436849 9.81445 0.560547C9.93815 0.684245 10 0.830729 10 1C10 1.16927 9.93815 1.31576 9.81445 1.43945L5.43945 5.81445C5.31576 5.93815 5.16927 6 5 6C4.83073 6 4.68424 5.93815 4.56055 5.81445L0.185547 1.43945C0.0618486 1.31576 0 1.16927 0 1Z"
                fill="#2C2C2C"
              />
            </svg>
          )}
        </div>
        <b>Сортировка по:</b>
        <span onClick={() => setPopupIsOpen(!popupIsOpen)}>{activeSort.name}</span>
      </div>
      {popupIsOpen && (
        <div className="sort__popup">
          <ul>
            {sortBy.map((type, typeID) => {
              return (
                <li
                  className={activeSort.name === type.name ? 'active' : ''}
                  onClick={() => {
                    onClickSortType(type);
                  }}
                  key={typeID}>
                  {type.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
});
