import React from 'react';
import { TextField, Button } from '@material-ui/core';

import styles from './Login.module.scss';

const Login = () => (
  <div className={styles.component}>
    <h1>Login</h1>
    <form className={styles.root} noValidate autoComplete="off">
      <TextField className={styles.input} label="Login" variant="outlined" />
      <TextField className={styles.input} label="Password" variant="outlined" />
      <Button href="/panel" className={styles.input} variant="outlined">
        Get in
      </Button>
    </form>
  </div>
);

export default Login;
