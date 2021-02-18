import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const buildControl = (props) => (

    <React.Fragment>
        <Grid item xs={4} spacing={2}>
            <div >{props.label}</div>
        </Grid>
        <Grid item xs={3}>
            <Button variant="contained" color="primary"
                onClick={props.removed}
                disabled={props.disabled}>
                -
        </Button>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" color="primary"
                onClick={props.added}>
                +
        </Button>
        </Grid>
    </React.Fragment>


);

export default buildControl;