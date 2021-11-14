import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

import styles from './UniversalForm.module.scss';

const UniversalForm = ({ idReadOnly }) => {
  const [duration, setDuration] = React.useState('');
  const [table, setTable] = React.useState('');

  const handleChangeDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleChangeTable = (event) => {
    setTable(event.target.value);
  };

  function getIdfromLink() {
    const viewURL = window.location.href;
    const id = viewURL.split('/').at(-1);
    return id;
  }

  return (
    <div>
      <form className={styles.pickers} noValidate>
        {idReadOnly === true ? (
          <TextField
            className={styles.input}
            id="outlined-disabled"
            variant="outlined"
            label="ID"
            defaultValue={getIdfromLink()}
            InputProps={{
              readOnly: true,
            }}
          />
        ) : (
          <TextField
            className={styles.input}
            id="outlined-basic"
            label="ID"
            variant="outlined"
          />
        )}
        <FormControl className={styles.input} variant="outlined">
          <InputLabel id="select-tables-label">Table</InputLabel>
          <Select
            labelId="select-tables-label"
            id="select-tables"
            value={table}
            onChange={handleChangeTable}
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
          <InputLabel id="select-duration-label">Duration</InputLabel>
          <Select
            labelId="select-duration-label"
            id="select-duration-outlined"
            value={duration}
            onChange={handleChangeDuration}
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
};

UniversalForm.propTypes = {
  idReadOnly: PropTypes.bool,
};

export default UniversalForm;
