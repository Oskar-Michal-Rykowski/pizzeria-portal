import React from 'react';

import styles from './TablesEventNew.module.scss';
import UniversalForm from '../../features/UniversalForm/UniversalForm';

export default function TablesEventNew() {
  return (
    <div className={styles.component}>
      <h2>New Event</h2>
      <UniversalForm />
    </div>
  );
}
