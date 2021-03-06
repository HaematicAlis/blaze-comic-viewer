import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addComicImgur } from '../../../../actions/comic.js';

import { Typography, Container, Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Upload = () => {
    const [comicName, setComicName] = useState('');
    const [album, setAlbum] = useState('');
    const session = useSelector((state) => state.session);
    const classes = useStyles();
    const dispatch = useDispatch();

    const doUpload = () => {
        let name;
        comicName ? name = comicName : name = 'Untitled';

        const comic = { name: name, owner: session.id, album: album };

        document.getElementById('imgurField').value = null;
        document.getElementById('nameField').value = null;

        if (album.includes('imgur')) {
            dispatch(addComicImgur(comic));
        } else {
            alert('Invalid link'); // Error handling goes here
        }
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    <Paper className={classes.previewPaper}>
                        <Grid container spacing={2} direction="column" align="center" justify="center">
                            <Grid item>
                                <Typography variant="body1">You are logged in as <span style={{color: 'red'}}>{session.username}</span>.</Typography>
                                <Typography variant="body1">Import a comic to get started.</Typography>
                            </Grid>
                            <Grid item>
                                <TextField id="imgurField" variant="outlined" label="Imgur album link" color="secondary" size="small" onChange={(e) => setAlbum(e.target.value)}></TextField>
                            </Grid>
                            <Grid item>
                                <TextField id="nameField" variant="outlined" label="Comic name" color="secondary" size="small" onChange={(e) => setComicName(e.target.value)}></TextField>
                            </Grid>
                            <Grid item>
                                <Button disabled={album ? false : true} variant="outlined" color="secondary" onClick={doUpload}>Upload</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Upload;