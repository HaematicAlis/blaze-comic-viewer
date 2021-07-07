import React from 'react';
import { useSelector } from 'react-redux';

import { Typography, Container, CircularProgress } from '@material-ui/core';
import useStyles from './styles.js';

const Comics = () => {
    const comics = useSelector((state) => state.comics);
    const classes = useStyles();

    return (
        <Container className={classes.outerContainer} maxWidth="lg">
            <Typography variant="h4">Comics</Typography>
            {!comics.length ? <CircularProgress color="secondary" /> : (
                comics.map((comic) => {
                    return comic.images.map((image) => {
                        return <img key={image._id} width="50px" src={image.base64} alt="base64" />;
                    });
                })
            )}
        </Container>
    );
}

export default Comics;