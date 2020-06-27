import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './ExchangeInput.module.css';

export function ExchangeInput({ value, changeHandler, readOnly, name }) {
  return (
    <>
      <TextField
        className={styles.input}
        InputProps={{ 
          style: { fontSize: 40 },
          inputProps: { min : 0 },
          readOnly: readOnly
        }}
        fullWidth={true}
        value={value}
        onChange={(evt) => changeHandler(evt.target.value)}
        id="outlined-number"
        label={name}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      Сюда потом допишу
    </>
  )
}
