import React from 'react';

import styles from './Pagination.module.scss';

export default function Pagination({ paginationCount, selectedPage, setSelectedPage }) {
  return (
    <div className={styles.root}>
      <span
        className={selectedPage === 1 ? styles.prev + ' ' + styles.inactive : styles.prev}
        onClick={() => setSelectedPage(selectedPage - 1)}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 55.753 55.753"
          xmlSpace="preserve">
          <g>
            <path
              d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001
		c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637
		c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727
		c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"
            />
          </g>
        </svg>
      </span>
      <ul className={styles.list}>
        {[...Array(paginationCount)].map((_, index) => (
          <li
            className={
              selectedPage === index + 1 ? styles.item + ' ' + styles.selected : styles.item
            }
            key={index}
            onClick={() => {
              setSelectedPage(index + 1);
            }}>
            {index + 1}
          </li>
        ))}
      </ul>
      <span
        className={
          selectedPage === paginationCount ? styles.next + ' ' + styles.inactive : styles.next
        }
        onClick={() => setSelectedPage(selectedPage + 1)}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 55.752 55.752"
          xmlSpace="preserve">
          <g>
            <path
              d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001
		c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58
		s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912
		C44.605,26.413,44.086,24.993,43.006,23.916z"
            />
          </g>
        </svg>
      </span>
    </div>
  );
}
