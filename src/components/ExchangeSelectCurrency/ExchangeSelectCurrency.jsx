import React, { useMemo } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './ExchangeSelectCurrency.module.css';
import { useSelector, useDispatch } from 'react-redux';

export function ExchangeSelectCurrency({ activeCur, changeCur }) {
  const currencyList = useSelector((store) => store.currencyReducer);
  const favoriteCurrency = useSelector((store) => store.favoriteCurrencyReducer);
  const dispatch = useDispatch();

  const sorted = useMemo(() => currencyList.slice().sort((a, b) => {
    if (a.ID === favoriteCurrency.currency.ID) return -1;
    if (favoriteCurrency.list.includes(a.ID) > favoriteCurrency.list.includes(b.ID)) return -1;
    return 1;
  }),[currencyList, favoriteCurrency])
 

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
              onClick={() => {
                dispatch(changeCur(button))
              }}
              key={index}
              variant={button.ID === activeCur.ID ? "contained" : ""}
              className={styles.button}
            >
              {button.CharCode}
            </Button>
          )
        }
        return null;
      })}
    </ButtonGroup>
  )
}
