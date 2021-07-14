import React from 'react';
import { useDispatch } from 'react-redux';

import { select, selectImgur } from '../../../../actions/selected.js';
import { setPage } from '../../../../actions/page.js';

import { Typography, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Comic = ({ comic }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const comicInfo = comic;

    const selectComic = () => {
        if (comicInfo.album !== 'none') {
            dispatch(setPage(0))
            .then(dispatch(selectImgur(comicInfo.album)));
        } else {
            let cover = [];
            cover.push(comicInfo.cover);
            dispatch(setPage(0))
            .then(dispatch(select(cover)));
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Typography variant="h4">{comicInfo.name}</Typography>
            <img src={comicInfo.cover.src} alt={`Refresh to see ${comicInfo.name}`} width="50px" onClick={selectComic} />
        </Container>
    );
}

export default Comic;