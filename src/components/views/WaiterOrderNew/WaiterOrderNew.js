import React from 'react';
import styles from './WaiterOrderNew.module.scss';
import UniversalForm from '../../features/UniversalForm/UniversalForm';
import MenuForm from '../../features/MenuForm/MenuForm';

export default function WaiterOrderNew() {
  return (
    <div className={styles.component}>
      <h2>Order New</h2>
      <UniversalForm />
      <MenuForm />
    </div>
  );
}
