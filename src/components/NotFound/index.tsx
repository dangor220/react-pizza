import React from 'react';

import styles from './NotFound.module.scss';
import notFoundImg from '../../assets/images/icons/notfound.png';

export default function NotFound({ fetchError = false }): React.ReactNode {
  return (
    <div className={styles.root}>
      <img src={notFoundImg} alt="notfound" />
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
