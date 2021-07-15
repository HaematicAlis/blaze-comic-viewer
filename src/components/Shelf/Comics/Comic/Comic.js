import React from 'react';
import { useDispatch } from 'react-redux';

import { select, selectImgur } from '../../../../actions/selected.js';
import { deleteComic } from '../../../../actions/comic.js';
import { setPage } from '../../../../actions/page.js';

import { Typography, Container, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
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

    const doDeleteComic = () => {
        if (window.confirm('Are you sure you want to delete this comic?')) {
            dispatch(deleteComic(comicInfo._id));
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false} disableGutters>
            <Typography className={classes.titleText} variant="h6">
                {comicInfo.name}<IconButton color="secondary" size="small" onClick={doDeleteComic}><ClearIcon /></IconButton>
            </Typography>
            <img className={classes.thumbnail} src={comicInfo.cover.src} alt={comicInfo.name} onClick={selectComic} />
        </Container>
    );
}

export default Comic;