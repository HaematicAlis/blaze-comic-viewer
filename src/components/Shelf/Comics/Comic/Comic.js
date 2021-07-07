import React from 'react';

import { Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Comic = ({ comic }) => {
    const classes = useStyles();
    const comicInfo = comic;

    return (
        <Container className={classes.outerContainer} maxWidth="lg">
            <Typography variant="h4">{comicInfo.name}</Typography>
            {comicInfo.images.map((image) => {
                return <img key={image._id} src={image.base64} alt={image.name} width="50px" />;
            })}
        </Container>
    );
}

export default Comic;