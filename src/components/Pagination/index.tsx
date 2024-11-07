import React from 'react';
import styles from './Pagination.module.scss';

type PaginationProps = {
  paginationCount: number;
  selectedPage: number;
  setSelectedPage: (page: number) => void;
};

export default function Pagination({
  paginationCount,
  selectedPage,
  setSelectedPage,
}: PaginationProps): React.ReactNode {
  const generatePages = () => {
    const pages = [];
    if (paginationCount === 1) {
      return (
        <li
          key="first-page"
          className={selectedPage === 1 ? `${styles.item} ${styles.selected}` : styles.item}
          onClick={() => setSelectedPage(1)}>
          1
        </li>
      );
    }
    const delta = window.innerWidth <= 478 ? 1 : 2; // Количество видимых страниц рядом с выбранной

    if (paginationCount > 1) {
      // Всегда показываем первую и последнюю страницы
      const range = {
        start: Math.max(2, selectedPage - delta),
        end: Math.min(paginationCount - 1, selectedPage + delta),
      };

      // Первая страница
      pages.push(
        <li
          key="first-page"
          className={selectedPage === 1 ? `${styles.item} ${styles.selected}` : styles.item}
          onClick={() => setSelectedPage(1)}>
          1
        </li>,
      );

      // Троеточие перед серединой
      if (range.start > 2) {
        pages.push(
          <li key="start-ellipsis" className={styles.ellipsis}>
            ...
          </li>,
        );
      }

      // Страницы в середине
      for (let i = range.start; i <= range.end; i++) {
        pages.push(
          <li
            key={`page-${i}`} // Уникальный ключ для каждой страницы
            className={selectedPage === i ? `${styles.item} ${styles.selected}` : styles.item}
            onClick={() => setSelectedPage(i)}>
            {i}
          </li>,
        );
      }

      // Троеточие после серединной группы
      if (range.end < paginationCount - 1) {
        pages.push(
          <li key="end-ellipsis" className={styles.ellipsis}>
            ...
          </li>,
        );
      }

      // Последняя страница
      pages.push(
        <li
          key="last-page"
          className={
            selectedPage === paginationCount ? `${styles.item} ${styles.selected}` : styles.item
          }
          onClick={() => setSelectedPage(paginationCount)}>
          {paginationCount}
        </li>,
      );
    }
    return pages;
  };

  return (
    <div className={styles.root}>
      <button
        className={selectedPage === 1 ? `${styles.prev} ${styles.inactive}` : styles.prev}
        onClick={() => setSelectedPage(Math.max(1, selectedPage - 1))}>
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
      </button>
      <ul className={styles.list}>{generatePages()}</ul>
      <button
        className={
          selectedPage === paginationCount ? `${styles.next} ${styles.inactive}` : styles.next
        }
        onClick={() => setSelectedPage(Math.min(paginationCount, selectedPage + 1))}>
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
      </button>
    </div>
  );
}
