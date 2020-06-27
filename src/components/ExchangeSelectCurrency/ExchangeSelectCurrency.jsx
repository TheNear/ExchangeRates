import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './ExchangeSelectCurrency.module.css';

export function ExchangeSelectCurrency() {
  return (
    <ButtonGroup
      size="small"
      className={styles.buttons}
      variant="contained"
      color="primary"
      aria-label="buttons"
    >
      <Button className={styles.button}>One</Button>
      <Button className={styles.button}>Two</Button>
      <Button className={styles.button}> Three</Button>
    </ButtonGroup>
  )
}
