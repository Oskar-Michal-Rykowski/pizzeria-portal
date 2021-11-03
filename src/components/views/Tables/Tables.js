import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './Tables.module.scss';

const reservations = [
  { id: '12345', time: '8:00', table: 1 },
  { id: '12441', time: '8:00', table: 2 },
  { id: '15456', time: '8:30', table: 1 },
  { id: '55555', time: '8:30', table: 3 },
  { id: '66666', time: '9:00', table: 2 },
  { id: '77777', time: '9:00', table: 3 },
  { id: '88888', time: '9:30', table: 1 },
  { id: '11111', time: '10:00', table: 1 },
  { id: '33333', time: '11:30', table: 2 },
  { id: '55553', time: '13:00', table: 3 },
  { id: '12222', time: '14:00', table: 3 },
  { id: '12344', time: '14:30', table: 1 },
  { id: '23232', time: '15:30', table: 2 },
  { id: '54545', time: '16:00', table: 1 },
  { id: '66666', time: '16:30', table: 1 },
];

function getReservation(hour, table) {
  let reservationId = null;
  for (let reservation of reservations) {
    if (hour === reservation.time && table === reservation.table) {
      reservationId = reservation.id;
    }
  }
  return reservationId;
}

var hours = [],
  i,
  j;
for (i = 8; i < 23; i++) {
  for (j = 0; j < 2; j++) {
    hours.push(i + ':' + (j === 0 ? '00' : 30 * j));
  }
}

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
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
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/4321`}>
      Reservation No 4321
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
      New Reservation
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/123459`}>
      Event No 123459
    </Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}>New Event</Link>
  </div>
);

export default Tables;
