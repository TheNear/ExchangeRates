import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import style from './CurrencyList.module.css';

export function CurrencyList() {
  const currency = useSelector(store => store.currencyReducer)

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Единиц</TableCell>
            <TableCell align="left">Букв. код</TableCell>
            <TableCell align="left">Валюта</TableCell>
            <TableCell align="left">Курс</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currency.map((currencyRow) => (
            <TableRow key={currencyRow.NumCode}>
              <TableCell align="left">{currencyRow.Nominal}</TableCell>
              <TableCell align="left">{currencyRow.CharCode}</TableCell>
              <TableCell align="left">{currencyRow.Name}</TableCell>
              <TableCell align="left">{currencyRow.Value.toFixed(1)} ({(currencyRow.Previous - currencyRow.Value).toFixed(1)})</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

