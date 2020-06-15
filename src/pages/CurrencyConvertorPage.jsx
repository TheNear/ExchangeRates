import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { CurrencyList } from '../components/CurrencyList/CurrencyList.jsx';
import { FavoriteCurrency } from '../components/FavoriteCurrency/FavoriteCurrency.jsx';
import { useDispatch } from "react-redux";
import styles from "./CurrencyConvertorPage.module.css";
import { getCurrencyList } from '../redux/Currency/action.js';

function CurrencyConvertorPage() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getCurrencyList());
  })
  return (
    <Container className={styles.container} maxWidth="md">
      <FavoriteCurrency />
      <CurrencyList />
    </Container>
  )
}

export default CurrencyConvertorPage;
