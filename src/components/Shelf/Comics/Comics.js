import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Comic from './Comic/Comic.js';
import { setPage } from '../../../actions/page.js';

import { Typography, Container, Grid, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const page = useSelector((state) => state.page);
    const comics = useSelector((state) => state.comics);
    const selected = useSelector((state) => state.selected);
    const viewOptions = useSelector((state) => state.viewOptions);
    const dispatch = useDispatch();
    const classes = useStyles();

    function doPrev() {
        if (page > 0) {
            dispatch(setPage(page - 1));
        }
    }

    const doNext = () => {
        if (page < selected.length - 1) {
            dispatch(setPage(page + 1));
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container direction="column" justify="center" align="center">
                <Grid container spacing={2} direction="row" justify="center">
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={() => dispatch(setPage(0))}>First</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doPrev}>Prev</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={doNext}>Next</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" onClick={() => dispatch(setPage(selected.length-1))}>Last</Button>
                    </Grid>
                </Grid>
            {
                selected.length ? (
                    <Grid item key={selected[page].name}>
                        <Typography variant="subtitle2"><span style={{color: "white"}}>{selected[page].name}</span></Typography>
                        <img className={viewOptions.mode ? classes.comicImageWide : classes.comicImage} src={selected[page].base64} alt={selected[page].name} justify="center" />
                    </Grid>
                ) : ''
            }
            </Grid>
            {//!comics.length ? <CircularProgress color="secondary" /> : (
            !comics.length ? <></> : (
                comics.map((comic) => {
                    return <Comic key={comic._id} comic={comic}/>;
                })
            )}
        </Container>
    );
}

export default Comics;