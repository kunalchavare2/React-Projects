import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];



const buildControls = (props) => (
  <Grid container xs={12} justify="center" alignItems="center">
    <Grid container justify="center" alignItems="center"
      xs={12} sm={10} md={6}>
      <Grid item xs={8} justify="center" alignItems="center">
        Current Price: <strong>₹ {props.totalPrice.toFixed(2)}</strong>
      </Grid>


      <Grid container item xs={10}
        sm={8}
        justify="center" alignItems="center">{
          controls.map(ctrl => (
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              type={ctrl.type}
              added={() => props.ingredientsAdd(ctrl.type)}
              removed={() => props.ingredientsRemove(ctrl.type)}
              ingredients={props.ingredients}
            //disabled={props.disabled[ctrl.type]} 

            />
          ))
        }
      </Grid>

      <Grid item xs={8} sm={6} className={classes.OrderButton}
        spacing={2} justify="center" alignItems="center">
        <Button
          variant="contained" color="primary"
          disabled={!props.purchasable}>ORDER NOW</Button>
      </Grid>
    </Grid >
  </Grid>
);

export default buildControls;