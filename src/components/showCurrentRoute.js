import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, FormControl} from '@material-ui/core';

import TimelineField from './fields/timeline';
import { setSignal, saveJourney } from '../redux';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 240,
  },
}));


const CurrentRoute = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { current, signal } = useSelector(state => state.routes);

  const handleSignalClick = () => {
    dispatch(setSignal());
  }

  const handleSaveJourney = () => {
    dispatch(saveJourney(current, signal))
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">
        &nbsp; Current route:
      </Typography>
      { current.length ?
        <React.Fragment>
          <TimelineField 
            currentRoute={current}
            signals={signal}
            handleSignalClick={handleSignalClick}
          />
          {current.length === signal.length &&
            <FormControl className={classes.formControl}>
              <Button variant="contained" color="default" onClick={handleSaveJourney}>
                Save Journey
              </Button>
            </FormControl>}
        </React.Fragment>: 
        <Typography variant="subtitle1">
          &nbsp; Nothing to display
        </Typography>
      }
    </Paper>
  );
}

export default CurrentRoute;