import React from 'react';

import { Container, Typography, Grid } from '@material-ui/core';
import useStyles from './styles.js';

const Vocab = () => {
    const classes = useStyles();

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Typography variant="h3" color="secondary">Hello</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Vocab;