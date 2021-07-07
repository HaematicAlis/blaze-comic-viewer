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

    const doPrev = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    const doNext = () => {
        if (page < selected.length - 1) {
            setPage(page + 1);
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth="false">
            <Grid container direction="column" align="center">
                <Grid container spacing={2} direction="row" justify="center">
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={() => setPage(0)}>First</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doPrev}>Prev</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doNext}>Next</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={() => setPage(selected.length-1)}>Last</Button>
                    </Grid>
                </Grid>
            {
                selected.length ? (
                    <Grid item key={selected[page].name}>
                        <Typography variant="subtitle2">{selected[page].name}</Typography>
                        <img className={classes.comicImage} src={selected[page].base64} alt={selected[page].name} justify="center" />
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