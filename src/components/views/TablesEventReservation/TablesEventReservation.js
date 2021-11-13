import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import styles from './TablesEventReservation.module.scss';

export default function TablesEventReservation() {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  function getIdfromLink() {
    const viewURL = window.location.href;
    const id = viewURL.split('/').at(-1);
    return id;
  }

  return (
    <div className={styles.component}>
      <h2>Event Details</h2>
      <form className={styles.pickers} noValidate>
        <TextField
          className={styles.input}
          id="outlined-disabled"
          variant="outlined"
          label="Read Only"
          defaultValue={getIdfromLink()}
          InputProps={{
            readOnly: true,
          }}
        />
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="select-reservation-label">Table</InputLabel>
          <Select
            labelId="select-reservation-label"
            id="select-reservation"
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
          <InputLabel id="select-table-duration-label">Duration</InputLabel>
          <Select
            labelId="select-table-duration-label"
            id="select-table-duration"
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
