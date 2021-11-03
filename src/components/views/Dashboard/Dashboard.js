import React from 'react';
import styles from './Dashboard.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  { id: '1', type: 'event', time: '15:00' },
  { id: '2', type: 'reservation', time: '14:00' },
  { id: '3', type: 'ordered', time: '13:50' },
  { id: '4', type: 'prepared', time: '12:30' },
  { id: '5', type: 'delivered', time: '12:10' },
  { id: '6', type: 'paid', time: '13:30' },
];

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(6),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

const Dashboard = () => {
  return (
    <div className={styles.root}>
      <h1>Statistics:</h1>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={styles.paper}>Local orders: 6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.paper}>Remote orders: 6</Paper>
        </Grid>
      </Grid>
      <h1>Today:</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
