import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from '../../../lib/react-file-base64.js';

import { cookies } from '../../../index.js';
import { logout } from '../../../actions/account.js';
import { addComic } from '../../../actions/comic.js';
import { select, clearSelected } from '../../../actions/selected.js';
import { setPage } from '../../../actions/page.js';

import { Typography, Container, Button, Paper, Grid, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Preview = () => {
    const [comicName, setComicName] = useState('');
    const session = useSelector((state) => state.session);
    const selected = useSelector((state) => state.selected);
    const classes = useStyles();
    const dispatch = useDispatch();

    const doLogout = () => {
        if (session.username) {
            dispatch(logout())
            .then(() => {
                cookies.remove('ID');
                cookies.remove('Username');
                dispatch(clearSelected());
            });
        }
    }

    const convertImages = (files) => {
        let images = [];
        files.forEach((file) => {
            let { name, fileType, size, base64 } = file;
            images.push({ name: name, fileType: fileType, size: size, base64: base64 });
        });
        return images;
    }

    const getFiles = (files) => {
        const images = convertImages(files);
        dispatch(setPage(0))
        .then(dispatch(select(images)));
    }

    const doUpload = () => {
        const cover = selected[0];
        let name;
        if (comicName) {
            name = comicName;
        } else {
            name = 'Untitled';
        }
        const comic = { name: name, owner: session.id };
        dispatch(addComic(comic, cover));
    }

    const doClear = () => {
        dispatch(clearSelected());
    }

    return (
        <Container className={classes.outerContainer}>
            <Button variant="outlined" color="secondary" onClick={doLogout}>Logout</Button>
            <Button variant="outlined" color="secondary" onClick={doClear}>Clear</Button>
            <Paper className={classes.previewPaper}>
                <Grid container spacing={2} direction="column" align="center" justify="center">
                    <Grid item>
                        <Typography variant="body1">You are logged in as <span style={{color: 'red'}}>{session.username}.</span></Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">Import a comic to get started.</Typography>
                    </Grid>
                    <Grid item>
                        <FileBase64 className={classes.fileBase} multiple={true} onDone={getFiles.bind(this)}></FileBase64>
                    </Grid>
                    <Grid item>
                        <Button disabled={selected.length ? false : true} variant="outlined" color="secondary" onClick={doUpload}>Upload</Button>
                    </Grid>
                    <Grid item>
                        {selected.length > 0 && <TextField variant="outlined" label="Give your comic a name" color="secondary" size="small" onChange={(e) => setComicName(e.target.value)}></TextField>}
                        <Typography variant="body2">{selected.length ? `${selected.length} files selected` : 'No file selected'}</Typography>
                            {selected.length === 1 && <img src={selected[0].base64} alt={selected[0].name} width='25px'/>}
                            {selected.length > 1 && <div><img src={selected[0].base64} alt={selected[0].name} width='25px'/>...</div>}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Preview;