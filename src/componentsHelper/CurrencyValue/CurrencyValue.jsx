import React from 'react';
import styles from './CurrencyValue.module.css';

export function CurrencyValue({value, prev, code}) {

  const currencyDiff = value - prev;

  return (
    <span>
      {`${value.toFixed(2)} ${code.toLowerCase()} `}
      <span className={currencyDiff >= 0 ? styles.bad : styles.good}>
        ( {currencyDiff.toFixed(3)} )
      </span>
    </span>
  )
}

