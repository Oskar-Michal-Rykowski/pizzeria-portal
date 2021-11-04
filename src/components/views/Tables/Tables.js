import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import styles from './Tables.module.scss';

const reservations = [
  { id: '12345', time: '8:00', duration: 2, table: 1, type: 'reservation' },
  { id: '12441', time: '8:00', duration: 2, table: 2, type: 'event' },
  { id: '55555', time: '8:30', duration: 2, table: 3, type: 'event' },
  { id: '66666', time: '9:00', duration: 2, table: 2, type: 'reservation' },
  { id: '88888', time: '9:30', duration: 2, table: 1, type: 'event' },
  { id: '33333', time: '11:30', duration: 2, table: 2, type: 'event' },
  { id: '55553', time: '13:00', duration: 2, table: 3, type: 'event' },
  { id: '12222', time: '14:00', duration: 2, table: 3, type: 'reservation' },
  { id: '12344', time: '14:30', duration: 2, table: 1, type: 'event' },
  { id: '23232', time: '15:30', duration: 2, table: 2, type: 'reservation' },
  { id: '54545', time: '16:00', duration: 2, table: 1, type: 'event' },
  { id: '66666', time: '17:30', duration: 2, table: 1, type: 'reservation' },
];

function getReservation(hour, table) {
  let reservationId = null;
  let reservationType = 'booking';
  for (let reservation of reservations) {
    if (hour === reservation.time && table === reservation.table) {
      reservationId = reservation.id;
      if (reservation.type === 'event') {
        reservationType = 'events';
      }
    }
  }
  return (
    <Link
      className={styles.link}
      to={`${process.env.PUBLIC_URL}/tables/${reservationType}/${reservationId}`}
    >
      {reservationId}
    </Link>
  );
}

var hours = [],
  i,
  j;
for (i = 8; i < 20; i++) {
  for (j = 0; j < 2; j++) {
    hours.push(i + ':' + (j === 0 ? '00' : 30 * j));
  }
}

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <div className={styles.time}>
      <form className={styles.pickers} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          className={styles.picker}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="From"
          type="time"
          defaultValue="08:00"
          className={styles.picker}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          label="To"
          type="time"
          defaultValue="19:30"
          className={styles.picker}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </form>
    </div>
    <div className={styles.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>TIME</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hours.map((hour) => (
            <TableRow key={hour}>
              <TableCell>{hour}</TableCell>
              <TableCell>{getReservation(hour, 1)}</TableCell>
              <TableCell>{getReservation(hour, 2)}</TableCell>
              <TableCell>{getReservation(hour, 3)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    <div className={styles.buttons}>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        component={RouterLink}
        to={`${process.env.PUBLIC_URL}/tables/booking/new`}
      >
        New Reservation
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        component={RouterLink}
        to={`${process.env.PUBLIC_URL}/tables/events/new`}
      >
        New Event
      </Button>
    </div>
  </div>
);

export default Tables;
