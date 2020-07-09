import React from 'react';
import { CurrencyList } from '../../components/CurrencyList/CurrencyList.jsx';
import { FavoriteCurrency } from '../../components/FavoriteCurrency/FavoriteCurrency.jsx';

export function CurrencyConvertorPage() {

  return (
    <>
      <FavoriteCurrency />
      <CurrencyList />
    </>
  )
}
