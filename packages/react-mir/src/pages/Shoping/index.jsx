import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShoppingCar from '../../components/Cart';
import Sidebar from '../../components/Sidebar';
import useStyles from './styles';

export default function Shoping() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}><Sidebar /></Grid>
      <Grid item xs={10}>
        <Grid container justifyContent='center' alignItems='center'>
          <ShoppingCar />
        </Grid>
      </Grid>
    </Grid>


  )
}