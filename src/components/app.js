import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import SearchRoute from './searchRoute';
import ShowCurrentRoute from './showCurrentRoute';
import SavedJourneys from './savedRoutes';

const useStyles = makeStyles(theme => ({
  layout: {
    margin: theme.spacing(1),
    width: '100%',
  }
}));

// App component
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Typography variant="h4">
          &nbsp; Track Your Mobile Signal
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchRoute />
        </Grid>
        <Grid item xs={6}>
          <ShowCurrentRoute />
        </Grid>
        <Grid item xs={6}>
          <SavedJourneys />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;