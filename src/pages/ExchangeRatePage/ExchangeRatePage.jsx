import React from 'react';
import styles from './ExchangeRatePage.module.css';
import { ExchangeBlock } from '../../components/ExchangeBlock/ExchangeBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMainCurrency, changeSecondCurrency, changeBothCurrency } from '../../redux/exchangeCurrency/actions';

export function ExchangeRatePage() {
  const dispatch = useDispatch();
  const exchangesCurrencies = useSelector((store) => store.exchangeCurrencyReducer)
  const favoriteCurrency = useSelector((store) => store.favoriteCurrencyReducer.currency)
  const [fromValue, changeFromValue] = useState(0);
  const [toValue, changeToValue] = useState(0);

  useEffect(() => {
    const rate = ((exchangesCurrencies.mainCurrency.Value / exchangesCurrencies.secondCurrency.Value) 
                / exchangesCurrencies.mainCurrency.Nominal * exchangesCurrencies.secondCurrency.Nominal)
                * fromValue;
            
              
    changeToValue(rate.toFixed(2));
  }, [fromValue, exchangesCurrencies.mainCurrency.Value, exchangesCurrencies.secondCurrency.Value,
    exchangesCurrencies.mainCurrency.Nominal, exchangesCurrencies.secondCurrency.Nominal])

  
  useEffect(() => {
    dispatch(changeBothCurrency(favoriteCurrency));
  },[favoriteCurrency, dispatch])

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

