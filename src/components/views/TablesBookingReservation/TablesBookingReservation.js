import React from 'react';

import styles from './TablesBookingReservation.module.scss';
import UniversalForm from '../../features/UniversalForm/UniversalForm';

export default function TablesBookingReservation() {
  return (
    <div className={styles.component}>
      <h2>Reservation Details</h2>
      <UniversalForm idReadOnly={true} />
    </div>
  );
}
