import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FormControlLabel, Checkbox } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { changeFavoriteCurrency } from '../../redux/favoriteCurrency/action';

export function CurrencyList() {
  const dispatch = useDispatch();
  const currency = useSelector((store) => store.currencyReducer);
  const favoriteCurrency = useSelector((store) => store.favoriteCurrencyReducer);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Единиц</TableCell>
            <TableCell align="left">Букв. код</TableCell>
            <TableCell align="left">Валюта</TableCell>
            <TableCell align="left">Курс</TableCell>
            <TableCell align="left">Избранная</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currency.filter(currency => currency.CharCode !== favoriteCurrency.currency).sort((a, b) => {
            return favoriteCurrency.list.includes(a.ID) ? -1 : 1;
          }).map((currencyRow) => (
            <TableRow key={currencyRow.NumCode}>
              <TableCell align="left">{currencyRow.Nominal}</TableCell>
              <TableCell align="left">{currencyRow.CharCode}</TableCell>
              <TableCell align="left">{currencyRow.Name}</TableCell>
              <TableCell align="left">{currencyRow.Value.toFixed(1)} ({(currencyRow.Previous - currencyRow.Value).toFixed(1)})</TableCell>
              <TableCell align="center">
                <FormControlLabel
                  control={
                    <Checkbox
                        onChange={() => dispatch(changeFavoriteCurrency(currencyRow.ID))}
                        checked={favoriteCurrency.list.includes(currencyRow.ID)}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name={currencyRow.CharCode}
                        label={currencyRow.CharCode}
                    />
                  }
                />
             </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

