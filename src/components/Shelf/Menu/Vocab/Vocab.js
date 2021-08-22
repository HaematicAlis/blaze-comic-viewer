import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostAddIcon from '@material-ui/icons/PostAdd';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';
import { getAllVocab, addVocab, deleteVocab } from '../../../../actions/vocab.js';

import { Container, Typography, Grid, Button, TextField, Accordion, AccordionSummary, AccordionDetails, Popover, IconButton, Box } from '@material-ui/core';
import useStyles from './styles.js';

const Vocab = () => {
    const [vocabInfo, setVocabInfo] = useState({ term: '', gloss: '', reading: '', notes: '' });
    const [deleteAnchor, setDeleteAnchor] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const selected = useSelector((state) => state.selected);
    const page = useSelector((state) => state.page);
    const vocab = useSelector((state) => state.vocab);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (selected.images.length > 0) {
            dispatch(getAllVocab(selected._id));
        }
    }, [dispatch, selected, page]);

    const toggleDeletePopup = (event) => {
        deleteAnchor ? setDeleteAnchor(null) : setDeleteAnchor(event.currentTarget);
    }

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

    const wordsOnPage = () => {
        for (var i = 0; i < vocab.length; i++) {
            if (vocab[i].page === page) {
                return true;
            }
        }
        return false;
    }

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                    {selected.images.length > 0 ? (
                    <Grid item>
                            {vocab.map((word) => {
                                if (word.page === page) {
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
                                                        <IconButton size="small" color="secondary" onClick={toggleDeletePopup}><ClearIcon /></IconButton>
                                                    </Grid>
                                                </Grid>
                                                <Popover open={deleteAnchor ? true : false} anchorEl={deleteAnchor} anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} transformOrigin={{vertical: 'top', horizontal: 'left'}} onClose={toggleDeletePopup}>
                                                    <Box p={2}>
                                                        <Typography variant="body1">Delete vocab?</Typography>
                                                        <Button color="secondary" size="small" onClick={() => doDeleteVocab(word._id)}>Yes</Button>
                                                        <Button color="secondary" size="small" onClick={toggleDeletePopup}>No</Button>
                                                    </Box>
                                                </Popover>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                } else {
                                    return (
                                        <></>
                                    )
                                }
                            })}
                            {selected.images[page].done && !wordsOnPage() ? (<>
                                <CheckCircleIcon className={classes.checkIcon} />
                                <Typography className={classes.congratsText} variant="body1">Congrats! This page is done.</Typography></>
                            ) : <></>}
                            <Accordion className={classes.wordAccordion} expanded={expanded === 'bcv!addWord'} onChange={handleChange('bcv!addWord')}>
                                <AccordionSummary>
                                    <Typography style={{color: '#333'}} variant="body1"><PostAddIcon />&nbsp;Add Word</Typography>
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