import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getVocab, addVocab } from '../../../../actions/vocab.js';

import { Container, Typography, Grid, Button } from '@material-ui/core';
import useStyles from './styles.js';

const Vocab = () => {
    const selected = useSelector((state) => state.selected);
    const page = useSelector((state) => state.page);
    const vocab = useSelector((state) => state.vocab);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selected.images.length > 0) {
            dispatch(getVocab(selected._id));
        }
    }, [dispatch, selected]);

    const doAddVocab = () => {
        dispatch(addVocab({ comic: selected._id, page: page, term: 'test', gloss: 'testgloss' }))
    }

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    {selected.images.length > 0 ? (<>
                        <Typography variant="h3" color="secondary">Vocab Words:{vocab.length}</Typography>
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