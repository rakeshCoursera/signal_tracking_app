import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

import TimelineField from './fields/timeline';
import { setSignal } from '../redux';

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 240,
  },
}));

// Past saved journey component
const SavedJourneys = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { saved } = useSelector(state => state.routes);

  const handleSignalClick = () => {
    dispatch(setSignal());
  }

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">
        &nbsp; Past Journeys:
      </Typography>
      { saved.length ? saved.map((obj, index) => (
        <React.Fragment>
          <Typography variant="subtitle1">
            &nbsp; Journey {index + 1}:
          </Typography>
          <TimelineField 
            currentRoute={obj.route}
            signals={obj.signal}
            handleSignalClick={handleSignalClick}
          />
        </React.Fragment>
      )): 
        <Typography variant="subtitle1">
          &nbsp; No Journey to display
        </Typography>
      }
    </Paper>
  );
}

export default SavedJourneys;