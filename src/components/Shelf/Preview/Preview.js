import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addComic } from '../../../actions/comic.js';

import { Typography, Container, Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Preview = () => {
    const [comicName, setComicName] = useState('');
    const [imgurAlbum, setImgurAlbum] = useState('');
    const session = useSelector((state) => state.session);
    const classes = useStyles();
    const dispatch = useDispatch();

    const doUpload = () => {
        let name, album;
        comicName ? name = comicName : name = 'Untitled';
        imgurAlbum ? album = imgurAlbum : album = 'none';

        const comic = { name: name, owner: session.id, album: album };
        setImgurAlbum('');
        dispatch(addComic(comic));
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container spacing={2} direction="column" align="center">
                <Grid item>
                    <Paper className={classes.previewPaper}>
                        <Grid container spacing={2} direction="column" align="center" justify="center">
                            <Grid item>
                                <Typography variant="body1">You are logged in as <span style={{color: 'red'}}>{session.username}.</span></Typography>
                                <Typography variant="body1">Import a comic to get started.</Typography>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" label="Imgur album hash" color="secondary" size="small" onChange={(e) => setImgurAlbum(e.target.value)}></TextField>
                            </Grid>
                            <Grid item>
                                <TextField variant="outlined" label="Give your comic a name" color="secondary" size="small" onChange={(e) => setComicName(e.target.value)}></TextField>
                            </Grid>
                            <Grid item>
                                <Button disabled={imgurAlbum ? false : true} variant="outlined" color="secondary" onClick={doUpload}>Upload</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Preview;