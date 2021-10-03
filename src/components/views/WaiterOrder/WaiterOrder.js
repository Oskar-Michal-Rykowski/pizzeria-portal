import React from 'react';
// import PropTypes from 'prop-types';

import styles from './WaiterOrder.scss';

const WaiterOrder = () => (
  <div className={styles.component}>
    <h2>WaiterOrder view</h2>
    <h3>{getIdfromLink()}</h3>
  </div>
);

// WaiterOrder.propTypes = {
//   orderId: PropTypes.string,
// };

function getIdfromLink() {
  var viewURL = window.location.href;
  const id = viewURL.split('/').at(-1);
  return id;
}

export default WaiterOrder;
