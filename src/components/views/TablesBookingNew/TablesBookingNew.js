import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import styles from './TablesBookingNew.module.scss';

export default function TablesBookingNew() {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div className={styles.component}>
      <h2>New Reservation</h2>
      <form className={styles.pickers} noValidate>
        <TextField
          className={styles.input}
          id="outlined-basic"
          label="ID"
          variant="outlined"
        />
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="select-booking-new-label">Table</InputLabel>
          <Select
            labelId="select-booking-new-label"
            id="select-booking-new"
            value={option}
            onChange={handleChange}
            label="Table"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          className={styles.input}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Time"
          type="time"
          defaultValue="08:00"
          className={styles.input}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="select-tables-booking-new-label">Duration</InputLabel>
          <Select
            labelId="select-tables-booking-new-label"
            id="select-tables-booking-new"
            value={option}
            onChange={handleChange}
            label="Duration"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </form>
      <Button className={styles.input} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}
