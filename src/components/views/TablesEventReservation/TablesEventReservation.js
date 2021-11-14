import React from 'react';

import styles from './TablesEventReservation.module.scss';
import UniversalForm from '../../features/UniversalForm/UniversalForm';

export default function TablesEventReservation() {
  return (
    <div className={styles.component}>
      <h2>Event Details</h2>
      <UniversalForm idReadOnly={true} />
    </div>
  );
}
