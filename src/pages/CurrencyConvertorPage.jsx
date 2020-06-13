import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CurrencyList } from '../components/CurrencyList/CurrencyList.jsx';
import { FavoriteCurrency } from '../components/FavoriteCurrency/FavoriteCurrency.jsx';

import styles from "./CurrencyConvertorPage.module.css";

function CurrencyConvertorPage() {
  return (
    <Container className={styles.container} maxWidth="md">
      <FavoriteCurrency />
      <CurrencyList />
    </Container>
  )
}

export default CurrencyConvertorPage;
