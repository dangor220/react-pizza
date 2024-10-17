import React from 'react';

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.root}>
      <img src="./src/assets/images/icons/notfound.png" alt="notfound" />
      <h1>Ничего не найдено</h1>
      <p className={styles.description}>Данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}
