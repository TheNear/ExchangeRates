import React from 'react';
import { CurrencyList } from '../../components/CurrencyList/CurrencyList.jsx';
import { FavoriteCurrency } from '../../components/FavoriteCurrency/FavoriteCurrency.jsx';
// import styles from "./CurrencyConvertorPage.module.css";

export function CurrencyConvertorPage() {

  return (
    <>
      <FavoriteCurrency />
      <CurrencyList />
    </>
  )
}
