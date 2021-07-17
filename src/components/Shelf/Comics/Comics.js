import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Comic from './Comic/Comic.js';
import { setPage } from '../../../actions/page.js';

import { Container, Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const page = useSelector((state) => state.page);
    const comics = useSelector((state) => state.comics);
    const selected = useSelector((state) => state.selected);
    const viewOptions = useSelector((state) => state.viewOptions);
    const dispatch = useDispatch();
    const classes = useStyles();

    const doNextPage = () => {
        if (page < selected.images.length - 1) {
            dispatch(setPage(page + 1));
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
        {
            selected.images.length ? (
                <Grid container direction="column" justify="center" align="center">
                    <Grid item>
                        <img className={viewOptions.mode ? classes.comicImageWide : classes.comicImage} src={selected.images[page].src} alt={selected.images[page].name} onClick={doNextPage} justify="center" />
                    </Grid>
                </Grid>
            ) : (
                <Grid container direction="row" justify="center">
                {!comics.length ? <CircularProgress color="secondary" /> : (
                    comics.map((comic) => {
                        return (
                            <Grid item key={comic._id}>
                                <Comic comic={comic}/>
                            </Grid>
                        );
                    })
                )}
                </Grid>
            )
        }   
        </Container>
    );
}

export default Comics;