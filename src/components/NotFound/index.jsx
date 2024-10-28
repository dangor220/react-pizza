import React from 'react';

import styles from './NotFound.module.scss';

export default function NotFound({ fetchError = false }) {
  return (
    <div className={styles.root}>
      <img src="./src/assets/images/icons/notfound.png" alt="notfound" />
      <h1>{fetchError ? `Ошибка получения данных` : `Ничего не найдено`}</h1>
      <p className={styles.description}>
        {fetchError ? fetchError : `Данная страница отсутствует в нашем интернет-магазине`}
      </p>
      {fetchError ? (
        <button className="button" onClick={() => window.location.reload()}>
          {' '}
          Попробовать снова{' '}
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
