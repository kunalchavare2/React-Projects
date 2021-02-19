import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Styles from './BuildControl.module.css'



const buildControl = (props) => {
    const BurgerIngredients = new Map(Object.entries(props.ingredients));



    return (
        <React.Fragment>
            <Grid item xs={3} sm={3}>
                <div >{props.label}</div>
            </Grid>
            <Grid item xs={3} sm={3} >
                <Button size="small" className={Styles.RedColor} variant="contained" color="secondary"
                    onClick={props.removed}
                    disabled={props.disabled}>
                    -
            </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
                <Button size="small" variant="contained" color="primary"
                    onClick={props.added}>
                    +
            </Button>
            </Grid>
            <Grid item xs={3} sm={3}>
                <p> {BurgerIngredients.get(props.type)}</p>
            </Grid>
        </React.Fragment>
    );
}

export default buildControl;