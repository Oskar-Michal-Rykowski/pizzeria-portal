import React from 'react';

import UniversalForm from '../../features/UniversalForm/UniversalForm';
import styles from './TablesBookingNew.module.scss';

export default function TablesBookingNew() {
  return (
    <div className={styles.component}>
      <h2>New Reservation</h2>
      <UniversalForm />
    </div>
  );
}
