import React from 'react';
import styles from './TablesBookingReservation.scss';

const TablesBookingReservation = () => (
  <div className={styles.component}>
    <h2>TablesBookingReservation view</h2>
    <h3>{getIdfromLink()}</h3>
  </div>
);

function getIdfromLink() {
  var viewURL = window.location.href;
  const id = viewURL.split('/').at(-1);
  return id;
}

export default TablesBookingReservation;
