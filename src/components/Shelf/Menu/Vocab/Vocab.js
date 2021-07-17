import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getVocab, addVocab, deleteVocab } from '../../../../actions/vocab.js';

import { Container, Typography, Grid, Button, TextField } from '@material-ui/core';
import useStyles from './styles.js';

const Vocab = () => {
    const [vocabInfo, setVocabInfo] = useState({ term: '', gloss: '' });
    const selected = useSelector((state) => state.selected);
    const page = useSelector((state) => state.page);
    const vocab = useSelector((state) => state.vocab);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selected.images.length > 0) {
            dispatch(getVocab(selected._id, page));
        }
    }, [dispatch, selected, page]);

    const doAddVocab = () => {
        dispatch(addVocab({ comic: selected._id, page: page, term: vocabInfo.term, gloss: vocabInfo.gloss }))
    }

    const doDeleteVocab = (id) => {
        dispatch(deleteVocab(id));
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    {selected.images.length > 0 ? (<>
                        <Typography variant="h6" color="secondary">Vocab Words:{vocab.length}</Typography>
                        {vocab.map((word) => {
                            return (
                                <Container key={word._id} className={classes.wordContainer}>
                                    <Typography style={{color: 'white'}} variant="body1">Term: {word.term}</Typography>
                                    <Typography style={{color: 'white'}} variant="body1">Gloss: {word.gloss}</Typography>
                                    <Button size="small" color="secondary" onClick={() => doDeleteVocab(word._id)}>Delete</Button>
                                </Container>
                            );
                        })}
                        <TextField variant="outlined" color="secondary" size="small" placeholder="Enter term"
                            onChange={(e) => setVocabInfo({ ...vocabInfo, term: e.target.value })} />
                        <TextField variant="outlined" color="secondary" size="small" placeholder="Enter gloss"
                            onChange={(e) => setVocabInfo({ ...vocabInfo, gloss: e.target.value })} />
                        <Button size="small" color="secondary" onClick={doAddVocab}>Add Vocab</Button></>
                    ) : (
                        <Typography variant="body1" style={{color: 'white'}}>Open a comic to start adding words.</Typography>
                    )}
                    
                </Grid>
            </Grid>
        </Container>
    );
}

export default Vocab;