import PropTypes from 'prop-types';
import React from 'react';
import PageNav from '../PageNav/PageNav';

const MainLayout = ({ children }) => (
  <div>
    <PageNav></PageNav>
    <div>{children}</div>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
