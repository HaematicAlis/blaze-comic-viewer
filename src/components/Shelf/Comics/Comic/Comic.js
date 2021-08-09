import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { select } from '../../../../actions/selected.js';
import { deleteComic } from '../../../../actions/comic.js';
import { setPage } from '../../../../actions/page.js';
import { getAllVocab } from '../../../../actions/vocab.js';

import { Typography, Container, Button, IconButton, Grid, Popover, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import useStyles from './styles.js';

const Comic = ({ comic }) => {
    const [deleteAnchor, setDeleteAnchor] = useState(null);
    const [infoAnchor, setInfoAnchor] = useState(null);
    const [vocabAnchor, setVocabAnchor] = useState(null);
    const vocab = useSelector((state) => state.vocab);
    const classes = useStyles();
    const dispatch = useDispatch();
    const comicInfo = comic;

    const selectComic = () => {
        dispatch(setPage(0))
        .then(() => {
            dispatch(select(comicInfo))
        });
    }

    const doDeleteComic = () => {
        dispatch(deleteComic(comicInfo._id));
    }

    const toggleDeletePopup = (event) => {
        deleteAnchor ? setDeleteAnchor(null) : setDeleteAnchor(event.currentTarget);
    }

    const toggleInfoPopup = (event) => {
        infoAnchor ? setInfoAnchor(null) : setInfoAnchor(event.currentTarget);
    }

    const toggleVocabPopup = (event) => {
        if (vocabAnchor) {
            setVocabAnchor(null)
        } else {
            dispatch(getAllVocab(comicInfo._id));
            setVocabAnchor(event.currentTarget);
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false} disableGutters>
            <Typography noWrap className={classes.titleText} variant="h6">{comicInfo.name}</Typography>
            <img className={comicInfo.done ? classes.doneThumbnail : classes.thumbnail} src={comicInfo.images[0].src} alt={comicInfo.name} onClick={selectComic} />
            <Grid container className={classes.bottomBar} direction="row">
                <Grid item className={classes.albumButton}>
                    <IconButton className={classes.albumIcon} size="small" edge="start" onClick={toggleInfoPopup}><PhotoAlbumIcon /></IconButton>
                </Grid>
                <Grid item className={classes.albumButton}>
                    {comicInfo.done ? (
                        <IconButton className={classes.checkIcon} size="small" onClick={toggleVocabPopup}><CheckCircleIcon /></IconButton>
                    ) : (
                        <IconButton className={classes.albumIcon} size="small" onClick={toggleVocabPopup}><ReceiptIcon /></IconButton>
                    )}
                </Grid>
                <Grid item className={classes.deleteButton}>
                    <IconButton className={classes.deleteIcon} size="small" edge="end" onClick={toggleDeletePopup}><ClearIcon /></IconButton>
                </Grid>
            </Grid>
            <Popover open={deleteAnchor ? true : false} anchorEl={deleteAnchor} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}} onClose={toggleDeletePopup}>
                <Box p={2}>
                    <Typography variant="body1">Delete comic?</Typography>
                    <Button color="secondary" size="small" onClick={doDeleteComic}>Yes</Button>
                    <Button color="secondary" size="small" onClick={toggleDeletePopup}>No</Button>
                </Box>
            </Popover>
            <Popover open={infoAnchor ? true : false} anchorEl={infoAnchor} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}} onClose={toggleInfoPopup}>
                <Box p={2}>
                    <Typography variant="body1">Title: {comicInfo.name}</Typography>
                    <Typography variant="body1">Album: <a href={comicInfo.album} target="_blank"rel="noreferrer">{comicInfo.album}</a></Typography>
                    <Typography variant="body1">Pages: {comicInfo.images.length}</Typography>
                    <Typography variant="body1">Date Added: {comicInfo.dateCreated}</Typography>
                </Box>
            </Popover>
            <Popover open={vocabAnchor ? true : false} anchorEl={vocabAnchor} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}} onClose={toggleVocabPopup}>
                <Box p={2}>
                    <Typography variant="body1">Vocab #: {vocab.length}</Typography>
                    {vocab.map((word) => {
                        return (
                            <Typography key={word._id} variant="body1">{word.term}</Typography>
                        );
                    })}
                </Box>
            </Popover>
        </Container>
    );
}

export default Comic;