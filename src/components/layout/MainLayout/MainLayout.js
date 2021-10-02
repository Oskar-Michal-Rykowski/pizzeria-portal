import PropTypes from 'prop-types';
import React from 'react';

const MainLayout = ({ children }) => <div>{children}</div>;

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
