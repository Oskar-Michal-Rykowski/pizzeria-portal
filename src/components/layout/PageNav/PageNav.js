import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';
import { config } from '../../../Config';

const PageNav = () => (
  <nav>
    <Button
      className={styles.link}
      component={NavLink}
      exact
      to={config.dashboard}
      activeClassName="active"
    >
      Home
    </Button>
    <Button
      className={styles.link}
      component={NavLink}
      to={config.login}
      activeClassName="active"
    >
      Login
    </Button>
    <Button
      className={styles.link}
      component={NavLink}
      to={config.kitchen}
      activeClassName="active"
    >
      Kitchen
    </Button>
    <Button
      className={styles.link}
      component={NavLink}
      to={config.tables}
      activeClassName="active"
    >
      Tables
    </Button>
    <Button
      className={styles.link}
      component={NavLink}
      to={config.waiter}
      activeClassName="active"
    >
      Waiter
    </Button>
  </nav>
);

export default PageNav;
