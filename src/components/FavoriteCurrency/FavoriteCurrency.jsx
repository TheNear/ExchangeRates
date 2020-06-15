import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from './FavoriteCurrency.module.css';
import { useSelector } from 'react-redux';

export function FavoriteCurrency() {
  const currency = useSelector(store => store.currencyReducer)

  return (
    <div className={style.container}>
      <p className={style.text}> Избранная валюта : </p>
      <Select
          // value={age}
          // onChange={handleChange}
          displayEmpty
          // className={}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {currency.map(item => (
            <MenuItem key={item.NumCode} value={item.CharCode}>{item.Name}</MenuItem>
          ))}

        </Select>
    </div>
  )
};


