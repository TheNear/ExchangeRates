import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

export function CurrencyList() {
  const currency = useSelector(store => store.currencyReducer)

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

  const toggleFavorite = (id) => {
    const index = favorites.indexOf(id);
    if (index >= 0) {
      setFavorites((state) => state.filter((item) => item !== id));
    } else {
      setFavorites((state) => state.concat(id));
    }
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])


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
          {currency.slice().sort((a, b) => {
            if (favorites.includes(a.ID)) return -1;
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
                        onChange={() => toggleFavorite(currencyRow.ID)}
                        checked={favorites.includes(currencyRow.ID)}
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

