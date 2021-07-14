import React from 'react';
import { useSelector } from 'react-redux';

import Comic from './Comic/Comic.js';

import { Container, Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const page = useSelector((state) => state.page);
    const comics = useSelector((state) => state.comics);
    const selected = useSelector((state) => state.selected);
    const viewOptions = useSelector((state) => state.viewOptions);
    const classes = useStyles();

    return (
        <Container className={classes.outerContainer} maxWidth={false} disableGutters>
            <Grid container direction="column" justify="center" align="center">
            {
                selected.length ? (
                    <Grid item key={selected[page].name}>
                        <img className={viewOptions.mode ? classes.comicImageWide : classes.comicImage} src={selected[page].src} alt={selected[page].name} justify="center" />
                    </Grid>
                ) : (
                    <>
                    {!comics.length ? <CircularProgress color="secondary" /> : (
                        comics.map((comic) => {
                            return <Comic key={comic._id} comic={comic}/>;
                        })
                    )}
                    </>
                )
            }
            </Grid>
            
        </Container>
    );
}

export default Comics;