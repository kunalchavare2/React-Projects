import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];



const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> */}
    <p>Current Price: <strong>100</strong></p>
    {controls.map(ctrl => (
      <Grid container spacing={2} justify="center"
        alignItems="center">
        <Grid container item xs={12} spacing={3}
          justify="center" alignItems="center">

          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
          // added={() => props.ingredientAdded(ctrl.type)}
          // removed={() => props.ingredientRemoved(ctrl.type)}
          // disabled={props.disabled[ctrl.type]} 

          />

        </Grid>
      </Grid>
    ))}
    <Grid className={classes.OrderButton} container spacing={2} justify="center"
      alignItems="center">
      <Button
        
        variant="contained" color="primary"
        disabled={!props.purchasable}>ORDER NOW</Button>
    </Grid>
  </div >

);

export default buildControls;