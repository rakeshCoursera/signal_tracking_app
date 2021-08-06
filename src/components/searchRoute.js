import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, FormControl, Button } from '@material-ui/core';

import { setSource, setDestination, setCurrentRoute } from '../redux';
import SelectField from './fields/select';
import getShortestPath from '../helpers';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 240,
  },
}));

// Seach route for the given source and destination
const SearchRoute = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const {source, destination} = useSelector(state => state.routes);

  const handleChange = (event) => {
    const name = event.target.name;
    if (name === "source"){
      dispatch(setSource(event.target.value))
    } else {
      dispatch(setDestination(event.target.value))
    }
  };

  const handleClick = () => { 
    const path = getShortestPath(source.value, destination.value);
    dispatch(setCurrentRoute(path))
  }

  return (
    <Paper className={classes.paper}>
        <Typography variant="h6">
          &nbsp; Select Source/Destinaltion of Journey:
        </Typography>
        <SelectField 
          value={source.value}
          conflict={destination.value}
          name="source"
          label="Source"
          handleChange={handleChange}
        />
         <SelectField 
          value={destination.value}
          conflict={source.value}
          name="destination"
          label="Destination"
          handleChange={handleChange}
        />
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary" size="large" onClick={handleClick}>
            Search Route
          </Button>
        </FormControl>
    </Paper>
  );
}

export default SearchRoute;