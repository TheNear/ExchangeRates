import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './ExchangeSelectCurrency.module.css';
import { useSelector } from 'react-redux';

export function ExchangeSelectCurrency({ activeCur }) {
  const currencyList = useSelector((store) => store.currencyReducer);
  const favoriteCurrency = useSelector((store) => store.favoriteCurrencyReducer.list);

  const sorted = useMemo(() => currencyList.slice().sort((a, b) => {
    if (a.ID === activeCur.ID) return -1;
    if (favoriteCurrency.includes(a.ID) > favoriteCurrency.includes(b.ID)) return -1;
  }),[currencyList])
 

  return (
    <ButtonGroup
      size="small"
      className={styles.buttons}
      color="primary"
      aria-label="buttons"
    >
      {sorted.map((button, index) => {
        if (index < 4) {
          return (
            <Button 
              variant={button.ID === activeCur.ID ? "contained" : ""}
              className={styles.button}
            >
              {button.CharCode}
            </Button>
          )
        }
      })}
    </ButtonGroup>
  )
}
