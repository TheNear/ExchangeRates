import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './ExchangeInput.module.css';

export function ExchangeInput({
  value, changeHandler, readOnly, name,
}) {
  return (
    <>
      <TextField
        className={styles.input}
        InputProps={{
          style: { fontSize: 40 },
          inputProps: { min: 0 },
          readOnly,
        }}
        fullWidth
        value={value}
        onChange={(evt) => changeHandler(+evt.target.value)}
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
  );
}

ExchangeInput.propTypes = {
  value: PropTypes.number.isRequired,
  changeHandler: PropTypes.func,
  readOnly: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

ExchangeInput.defaultProps = {
  changeHandler: () => {},
  readOnly: false,
};
