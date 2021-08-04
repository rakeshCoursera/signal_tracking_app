import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  layout: {
    fontFamily: 'Verdana, Geneva, sans-serif',
    color: '#828282',
    fontSize: '0.7rem',
    margin: theme.spacing(1),
    width: '98%',
  }
}));

// parent app component
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
        Hello World !!!
    </div>
  );
}

export default App;