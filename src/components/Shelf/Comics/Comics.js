import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Comic from './Comic/Comic.js';

import { Typography, Container, CircularProgress, Grid, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const [page, setPage] = useState(0);
    const comics = useSelector((state) => state.comics);
    const selected = useSelector((state) => state.selected);
    const classes = useStyles();

    const doLeft = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const doRight = () => {
        if (page < selected.length - 1) {
            setPage(page + 1);
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth="lg">
            <Grid container direction="column" align="center">
                <Grid container direction="row" align="center">
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doLeft}>Left</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doRight}>Right</Button>
                    </Grid>
                </Grid>
            {
                selected.length ? (
                    <Grid item key={selected[page].name}>
                        <Typography variant="subtitle2">{selected[page].name}</Typography>
                        <img src={selected[page].base64} alt={selected[page].name} width="90%" justify="center" />
                    </Grid>
                ) : ''
            }
            </Grid>
            <hr />
            {!comics.length ? <CircularProgress color="secondary" /> : (
                comics.map((comic) => {
                    return <Comic key={comic._id} comic={comic}/>;
                })
            )}
        </Container>
    );
}

export default Comics;