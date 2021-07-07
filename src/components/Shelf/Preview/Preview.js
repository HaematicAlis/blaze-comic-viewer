import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from '../../../lib/react-file-base64.js';

import { cookies } from '../../../index.js';
import { logout } from '../../../actions/account.js';
import { addComic } from '../../../actions/comic.js';

import { Typography, Container, Button, Paper, Grid } from '@material-ui/core';
import useStyles from './styles.js';

const Preview = () => {
    const [selectedFile, setSelectedFile] = useState([]);
    const session = useSelector((state) => state.session);
    const classes = useStyles();
    const dispatch = useDispatch();

    const doLogout = () => {
        if (session.username) {
            dispatch(logout())
            .then(() => {
                cookies.remove('ID');
                cookies.remove('Username');
            });
        }
    }

    const convertImages = (files) => {
        let images = [];
        files.forEach((file) => {
            let { name, type, size, base64 } = file;
            images.push({ name: name, type: type, size: size, base64: base64 });
        });
        return images;
    }

    const getFiles = (files) => {
        setSelectedFile(files);
    }

    const doUpload = () => {
        const files = selectedFile;
        const images = convertImages(files);
        const comics = { name: 'name', owner: session.id, images: images };
        dispatch(addComic(comics));
        setSelectedFile([]);
    }

    return (
        <Container className={classes.outerContainer}>
            <Button variant="outlined" color="secondary" onClick={doLogout}>Logout</Button>
            <Paper className={classes.previewPaper}>
                <Grid container spacing={3} direction="column" align="center" justify="center">
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
                        <Button variant="outlined" color="secondary" onClick={doUpload}>Upload</Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2">{selectedFile.length ? selectedFile[0].name : 'No file selected'}</Typography>
                            {selectedFile.length === 1 && <img src={selectedFile[0].base64} alt='base' width='25px'/>}
                            {selectedFile.length > 1 && <div><img src={selectedFile[0].base64} alt='base' width='25px'/>...</div>}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Preview;