import React from 'react';
import { useSelector } from 'react-redux';

import Comic from './Comic/Comic.js';

import { Typography, Container, CircularProgress, Grid } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const comics = useSelector((state) => state.comics);
    const selected = useSelector((state) => state.selected);
    const classes = useStyles();

    return (
        <Container className={classes.outerContainer} maxWidth="lg">
            <Typography variant="h4">Comics</Typography>
            <hr />
            {!comics.length ? <CircularProgress color="secondary" /> : (
                comics.map((comic) => {
                    return <Comic key={comic._id} comic={comic}/>;
                })
            )}
            <hr />
            <Typography variant="h4">Selected Comic:</Typography>
            <Grid container direction="column" align="center">
            {
                selected.map((image) => {
                    return (
                        <Grid item key={image.name}>
                            <img src={image.base64} alt={image.name} width="90%" justify="center" />
                        </Grid>
                    );
                })
            }
            </Grid>
        </Container>
    );
}

export default Comics;