import React from 'react';

import { Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Comic = ({ comic }) => {
    const classes = useStyles();
    const comicInfo = comic;

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Typography variant="h4">{comicInfo.name}</Typography>
            <img src={comicInfo.cover.base64} alt={`Refresh to see ${comicInfo.name}`} width="50px" />
        </Container>
    );
}

export default Comic;