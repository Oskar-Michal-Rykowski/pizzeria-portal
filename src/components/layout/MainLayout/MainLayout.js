import PropTypes from 'prop-types';
import React from 'react';
import PageNav from '../PageNav/PageNav';

const MainLayout = ({ children }) => <PageNav>{children}</PageNav>;

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
