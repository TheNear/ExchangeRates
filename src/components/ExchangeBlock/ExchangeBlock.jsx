import React from 'react';
import styles from './ExchangeBlock.module.css'
import { ExchangeInput } from '../ExchangeInput/ExchangeInput';
import { ExchangeSelectCurrency } from '../ExchangeSelectCurrency/ExchangeSelectCurrency';

export function ExchangeBlock({ inputValue, inputValueHandler, readOnly, name, activeCur, changeCur}) {
  return (
    <div className={styles.container}>
      <ExchangeSelectCurrency
        activeCur={activeCur}
        changeCur={changeCur}
      />

      <ExchangeInput
        name={name}
        value={inputValue}
        changeHandler={inputValueHandler}
        readOnly={readOnly}
      />
    </div>
  )
}
