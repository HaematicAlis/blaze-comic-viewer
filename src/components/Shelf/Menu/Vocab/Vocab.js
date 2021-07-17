import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostAddIcon from '@material-ui/icons/PostAdd';
import { getVocab, addVocab, deleteVocab } from '../../../../actions/vocab.js';

import { Container, Typography, Grid, Button, TextField, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import useStyles from './styles.js';

const Vocab = () => {
    const [vocabInfo, setVocabInfo] = useState({ term: '', gloss: '', reading: '', notes: '' });
    const [expanded, setExpanded] = useState(false);
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

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const doAddVocab = () => {
        document.getElementById('termField').value = null;
        document.getElementById('glossField').value = null;
        document.getElementById('readingField').value = null;
        document.getElementById('notesField').value = null;
        dispatch(addVocab({ ...vocabInfo, comic: selected._id, page: page }));
    }

    const doDeleteVocab = (id) => {
        dispatch(deleteVocab(id));
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                    {selected.images.length > 0 ? (
                    <Grid item>
                            {vocab.map((word) => {
                                return (
                                    <Accordion key={word._id} className={classes.wordAccordion} expanded={expanded === word.term} onChange={handleChange(word.term)}>
                                        <AccordionSummary>
                                            <Typography style={{color: '#333'}} variant="body1">・&nbsp;{word.term}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container direction="column" align="left" spacing={2}>
                                                <Grid item>
                                                    <TextField size="small" label="Gloss" value={word.gloss} color="secondary" />
                                                </Grid>
                                                <Grid item>
                                                    <TextField size="small" label="Reading" value={word.reading} color="secondary" />
                                                </Grid>
                                                <Grid item>
                                                <TextField size="small" label="Notes" value={word.notes} color="secondary" />
                                                </Grid>
                                                <Grid item>
                                                    <Button size="small" color="secondary" onClick={() => doDeleteVocab(word._id)}>Delete</Button>
                                                </Grid>
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })}
                            <Accordion className={classes.wordAccordion} expanded={expanded === 'bcv!addWord'} onChange={handleChange('bcv!addWord')}>
                                <AccordionSummary>
                                    <Typography style={{color: '#333'}} variant="body1"f><PostAddIcon />&nbsp;Add Word</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Grid container className={classes.vocabInfoGrid} direction="column" align="center" spacing={1}>
                                    <Grid item>
                                        <TextField id="termField" label="Term" variant="outlined" color="secondary" size="small" placeholder="Enter term"
                                            onChange={(e) => setVocabInfo({ ...vocabInfo, term: e.target.value })} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="glossField" label="Gloss" variant="outlined" color="secondary" size="small" placeholder="Enter gloss"
                                            onChange={(e) => setVocabInfo({ ...vocabInfo, gloss: e.target.value })} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="readingField" label="Reading" variant="outlined" color="secondary" size="small" placeholder="Enter reading"
                                            onChange={(e) => setVocabInfo({ ...vocabInfo, reading: e.target.value })} />
                                    </Grid>
                                    <Grid item>
                                        <TextField id="notesField" label="Notes" variant="outlined" color="secondary" size="small" placeholder="Enter notes"
                                            onChange={(e) => setVocabInfo({ ...vocabInfo, notes: e.target.value })} />
                                    </Grid>
                                    <Grid item>
                                        <Button size="small" color="secondary" onClick={doAddVocab}>Add Vocab</Button>
                                    </Grid>
                                </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ) : (
                        <Grid item>
                            <Typography variant="body1" style={{color: 'white'}}>Open a comic to start adding words.</Typography>
                        </Grid>
                    )}
            </Grid>
        </Container>
    );
}

export default Vocab;