import React from 'react';
import styles from './ExchangeRatePage.module.css';
import { ExchangeBlock } from '../../components/ExchangeBlock/ExchangeBlock';

export function ExchangeRatePage() {
  return (
    <div className={styles.container}>
      <ExchangeBlock />
      <ExchangeBlock />

    </div>
  )
}

