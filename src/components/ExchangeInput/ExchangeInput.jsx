import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './ExchangeInput.module.css';

export function ExchangeInput() {
  return (
    <TextField
      className={styles.input}
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  )
}
