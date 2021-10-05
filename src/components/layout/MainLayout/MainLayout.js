import PropTypes from 'prop-types';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Container from '@mui/material/Container';

import PageNav from '../PageNav/PageNav';

const MainLayout = ({ children }) => (
  <div>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>

    <Container maxWidth="lg">
      <Toolbar />
      {children}
    </Container>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
