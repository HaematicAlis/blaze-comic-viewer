import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase64 from 'react-file-base64';

import { cookies } from '../../index.js';
import { logout } from '../../actions/account.js';
import { getComics, addComic } from '../../actions/comic.js';

import { Container, Typography, Button, Paper, CircularProgress } from '@material-ui/core';
import useStyles from './styles.js';

const Shelf = () => {
    //const [selectedFile, setSelectedFile] = useState(['']);
    const session = useSelector((state) => state.session);
    const comics = useSelector((state) => state.comics);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (session.id !== 0) {
            dispatch(getComics({ id: session.id }));
        }
    }, [dispatch, session.id]);

    const renderDirect = () => {
        if (!session.username) {
            return <Redirect to="/" />
        }
    }

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
        //setSelectedFile(files);

        const images = convertImages(files);
        const comics = { name: 'name', owner: session.id, images: images };
        dispatch(addComic(comics));
    }

    const doTest = () => {
        console.log(comics.length);
    }

    return (
        <Container className={classes.outerContainer}>
            {renderDirect()}
            <Typography variant="h3" margins={3}>Shelf</Typography>
            <hr></hr>
            <Paper className={classes.shelfPaper}>
                <Typography variant="body1">You are logged in as {session.username}</Typography>
                <FileBase64 multiple={true} onDone={getFiles.bind(this)}></FileBase64>
                <Typography variant="body1">Your Comics:</Typography>
                {!comics.length ? <CircularProgress color="secondary" /> : (
                    comics.map((comic) => {
                        return comic.images.map((image) => {
                            return <img key={image._id} width="50px" src={image.base64} alt="base64" />;
                        });
                    })
                )}
            </Paper>
            <Button variant="outlined" color="secondary" onClick={doLogout}>Logout</Button>
            <Button variant="outlined" color="secondary" onClick={doTest}>Test</Button>
        </Container>
    );
}

export default Shelf;