import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';

import { locations } from '../../constants';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 240,
  },
}));


const SelectField = ({value, conflict, name, label, handleChange}) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={`${name}-select`}>{label}</InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        label={label}
        inputProps={{
          name: `${name}`,
          id: `${name}-select`,
        }}
      >
        {locations.map((place, index) => (
          place !== conflict && <option aria-label={place} value={place} key={index.toString()}>{place}</option>
          ))}
      </Select>
    </FormControl>
  );
}

export default SelectField;