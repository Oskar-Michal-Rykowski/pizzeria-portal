import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './Tables.module.scss';

const reservations = [
  {
    id: '12345',
    time: '08:00',
    duration: '01:30',
    table: 1,
    type: 'reservation',
  },
  { id: '12441', time: '08:00', duration: '01:00', table: 2, type: 'event' },
  { id: '55555', time: '08:30', duration: '00:30', table: 3, type: 'event' },
  {
    id: '66666',
    time: '09:00',
    duration: '01:00',
    table: 2,
    type: 'reservation',
  },
  { id: '88888', time: '09:30', duration: '02:30', table: 1, type: 'event' },
  { id: '33333', time: '11:30', duration: '01:00', table: 2, type: 'event' },
  { id: '55553', time: '13:00', duration: '00:30', table: 3, type: 'event' },
  {
    id: '12222',
    time: '14:00',
    duration: '01:00',
    table: 3,
    type: 'reservation',
  },
  { id: '12344', time: '14:30', duration: '00:30', table: 1, type: 'event' },
  {
    id: '23232',
    time: '15:30',
    duration: '01:00',
    table: 2,
    type: 'reservation',
  },
  { id: '54545', time: '16:00', duration: '00:30', table: 1, type: 'event' },
  {
    id: '66666',
    time: '17:30',
    duration: '01:00',
    table: 1,
    type: 'reservation',
  },
];

function getReservation(hour, table) {
  let reservationId = null;
  let reservationType = 'booking';
  for (let reservation of reservations) {
    const startTime = reservation.time;
    const duration = reservation.duration;

    const startTimeArray = startTime.split(':');
    const durationArray = duration.split(':');

    let endHour = parseInt(startTimeArray[0]) + parseInt(durationArray[0]);
    let endMinutes = parseInt(startTimeArray[1]) + parseInt(durationArray[1]);

    if (endMinutes !== 30) {
      const hours = endMinutes / 60;
      endHour += hours;
      endMinutes = '00';
    }

    const endTime = `${endHour}:${endMinutes}`;
    const endTimeComplex = endTime.padStart(5, '0');

    if (
      (hour === startTime && table === reservation.table) ||
      (hour > startTime && hour < endTimeComplex && table === reservation.table)
    ) {
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

function createTimeSet() {
  const hours = [];
  const hourStart = 8;
  const hourEnd = 20;

  for (let i = hourStart; i < hourEnd; i++) {
    for (let j = 0; j < 2; j++) {
      const hour = i + ':' + (j === 0 ? '00' : 30 * j);
      hours.push(hour.padStart(5, '0'));
    }
  }
  return hours;
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
          {createTimeSet().map((hour) => (
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
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/tables/booking-new`}
      >
        New Reservation
      </Button>
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        component={NavLink}
        to={`${process.env.PUBLIC_URL}/tables/events-new`}
      >
        New Event
      </Button>
    </div>
  </div>
);

export default Tables;
