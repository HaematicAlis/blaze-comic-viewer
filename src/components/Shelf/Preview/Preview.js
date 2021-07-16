import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addComic } from '../../../actions/comic.js';

import { Typography, Container, Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Preview = () => {
    const [comicName, setComicName] = useState('');
    const [imgurAlbum, setImgurAlbum] = useState('');
    const [imgurError, setImgurError] = useState('');
    const session = useSelector((state) => state.session);
    const classes = useStyles();
    const dispatch = useDispatch();

    const doUpload = () => {
        let name, album;
        comicName ? name = comicName : name = 'Untitled';

        const comic = { name: name, owner: session.id, album: album };
        document.getElementById('imgurField').value = '';
        document.getElementById('nameField').value = '';
        dispatch(addComic(comic));
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container spacing={2} direction="column" align="center">
                <Grid item>
                    <Paper className={classes.previewPaper}>
                        <Grid container spacing={2} direction="column" align="center" justify="center">
                            <Grid item>
                                <Typography variant="body1">You are logged in as <span style={{color: 'red'}}>{session.username}</span>.</Typography>
                                <Typography variant="body1">Import a comic to get started.</Typography>
                            </Grid>
                            <Grid item>
                                <TextField id="imgurField" variant="outlined" label="Imgur album hash" color="secondary" size="small"
                                    onChange={(e) => setImgurAlbum(e.target.value)}
                                    error={imgurError ? true : false}
                                    helperText={imgurError}>
                                </TextField>
                            </Grid>
                            <Grid item>
                                <TextField id="nameField" variant="outlined" label="Give your comic a name" color="secondary" size="small" onChange={(e) => setComicName(e.target.value)}></TextField>
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