import React from 'react';
import Aux from '../../../hoc/Aux';
import { makeStyles } from '@material-ui/core/styles';
import Styles from './OrderSummary.module.css'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1)
        },
    },
}));

const OrderSummary = (props) => {
    const classes = useStyles();

    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredient => {
            return <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient} : {props.ingredients[ingredient]}</span></li>;
        });

    return <Aux>
        <h3>Your Order</h3>
        <hr />
        <p>A delicious burger with following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Total Price : ₹ {props.totalPrice}</p>
        <p>Continue to checkout?</p>

        <Grid container xs={12} justify="center">
            <Grid container xs={12} justify="space-evenly" spacing={2}>
                <Grid item xs={5}>
                    <Button size="small"
                        variant="outlined" color="primary"
                        onClick={props.onCancel}>Cancel</Button>
                </Grid>
                <Grid item xs={5}>
                    <Button size="small"
                        variant="contained" color="primary">
                        Checkout</Button>
                </Grid>
            </Grid>
        </Grid>

    </Aux >

}

export default OrderSummary;