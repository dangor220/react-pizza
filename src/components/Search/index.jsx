import { useCallback, useContext, useRef, useState } from 'react';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';

export default function Search() {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const searchInput = useRef(null);

  const debounce = (func, ms) => {
    let timerID;
    return function (...args) {
      clearTimeout(timerID);
      timerID = setTimeout(() => func.apply(this, args), ms);
    };
  };

  let handleInputDebounce = useCallback(debounce(setSearchValue, 500), []);

  const handleInput = (event) => {
    setValue(event.target.value);
    handleInputDebounce(event.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.search}
        ref={searchInput}
        type="text"
        placeholder="Поиск пиццы..."
        value={value}
        onChange={(event) => {
          handleInput(event);
        }}
      />
      {value && (
        <svg
          className={styles.clear}
          onClick={() => {
            searchInput.current.focus();
            setSearchValue('');
            setValue('');
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48">
          <path
            fill="#ffab91"
            d="M44,17L39,12c-0.8-0.8-2-0.8-2.8,0L28,20.2L19.8,12c-0.8-0.8-2-0.8-2.8,0L12,17c-0.8,0.8-0.8,2,0,2.8l8.2,8.2	L12,36.2c-0.8,0.8-0.8,2,0,2.8L17,44c0.8,0.8,2,0.8,2.8,0l8.2-8.2l8.2,8.2c0.8,0.8,2,0.8,2.8,0L44,39c0.8-0.8,0.8-2,0-2.8L35.8,28	l8.2-8.2C44.8,19,44.8,17.8,44,17z"
          />
          <path
            fill="none"
            stroke="#18193f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M11.7,28.5L8,32.2c-0.8,0.8-0.8,2,0,2.8L13,40c0.8,0.8,2,0.8,2.8,0l8.2-8.2l8.2,8.2c0.8,0.8,2,0.8,2.8,0L40,35	c0.8-0.8,0.8-2,0-2.8L31.8,24l8.2-8.2c0.8-0.8,0.8-2,0-2.8l-2.6-2.6"
          />
          <path
            fill="none"
            stroke="#18193f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M33.1,7.1L24,16.2L15.8,8c-0.8-0.8-2-0.8-2.8,0L8,13c-0.8,0.8-0.8,2,0,2.8l8.2,8.2"
          />
        </svg>
      )}
    </div>
  );
}
