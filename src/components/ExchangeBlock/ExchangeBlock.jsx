import React from 'react';
import styles from './ExchangeBlock.module.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { ExchangeInput } from '../ExchangeInput/ExchangeInput';

export function ExchangeBlock() {
  return (
    <div className={styles.container}>
      <ButtonGroup
        className={styles.buttons}
        variant="contained"
        color="primary"
        aria-label="buttons"
      >
        <Button className={styles.button}>One</Button>
        <Button className={styles.button}>Two</Button>
        <Button className={styles.button}> Three</Button>
      </ButtonGroup>

      <ExchangeInput/>
    </div>
  )
}
