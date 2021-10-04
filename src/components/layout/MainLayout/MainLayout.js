import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';

import PageNav from '../PageNav/PageNav';

const MainLayout = ({ children }) => (
  <div>
    <AppBar>
      <Toolbar>
        <PageNav />
      </Toolbar>
    </AppBar>

    <div>{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
