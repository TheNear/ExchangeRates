import React from 'react';
import styles from './ExchangeRatePage.module.css';
import { ExchangeBlock } from '../../components/ExchangeBlock/ExchangeBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeMainCurrency, changeSecondCurrency } from '../../redux/exchangeCurrency/actions';

export function ExchangeRatePage() {
  const exchangesCurrencies = useSelector((store) => store.exchangeCurrencyReducer)
  const [fromValue, changeFromValue] = useState(0);
  const [toValue, changeToValue] = useState(0);

  useEffect(() => {
    // const curValue = ((currency.Value / favoriteCurrency.currency.Value) / currency.Nominal * favoriteCurrency.currency.Nominal);
    const rate = ((exchangesCurrencies.mainCurrency.Value / exchangesCurrencies.secondCurrency.Value) 
                / exchangesCurrencies.mainCurrency.Nominal * exchangesCurrencies.secondCurrency.Nominal)
                * fromValue;
            
              
    changeToValue(rate.toFixed(2));
  }, [fromValue, exchangesCurrencies.mainCurrency.Value, exchangesCurrencies.secondCurrency.Value,
    exchangesCurrencies.mainCurrency.Nominal, exchangesCurrencies.secondCurrency.Nominal])

  
  

  return (
    <div className={styles.container}>
      <ExchangeBlock 
        inputValue={fromValue}
        inputValueHandler={changeFromValue}
        name="Отдаешь"
        activeCur={exchangesCurrencies.mainCurrency}
        changeCur={changeMainCurrency}
      />
      <ExchangeBlock
        inputValue={toValue}
        readOnly={true}
        activeCur={exchangesCurrencies.secondCurrency}
        name="Получаешь"
        changeCur={changeSecondCurrency}
      />

    </div>
  )
}

