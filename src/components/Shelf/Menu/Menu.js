import React, { useState } from 'react';

import Upload from './Upload/Upload.js';
import Vocab from './Vocab/Vocab.js';
import Logout from './Logout/Logout.js';
import ImageData from './ImageData/ImageData.js';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ImageIcon from '@material-ui/icons/Image';
import PublishIcon from '@material-ui/icons/Publish';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Accordion, AccordionSummary, AccordionDetails, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Menu = () => {
    const [expanded, setExpanded] = useState('upload');
    const classes = useStyles();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container className={classes.outerContainer} maxWidth={false}>
            <Accordion expanded={expanded === 'upload'} onChange={handleChange('upload')}>
                <AccordionSummary>
                    <PublishIcon />&nbsp;Upload
                </AccordionSummary>
                <AccordionDetails>
                    <Upload />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'vocab'} onChange={handleChange('vocab')}>
                <AccordionSummary>
                    <MenuBookIcon />&nbsp;Vocab
                </AccordionSummary>
                <AccordionDetails>
                    <Vocab />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'word'} onChange={handleChange('word')}>
                <AccordionSummary>
                    <PostAddIcon />&nbsp;Add Word
                </AccordionSummary>
                <AccordionDetails>
                    <Vocab />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'imageData'} onChange={handleChange('imageData')}>
                <AccordionSummary>
                    <ImageIcon />&nbsp;Image Data
                </AccordionSummary>
                <AccordionDetails>
                    <ImageData />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'logout'} onChange={handleChange('logout')}>
                <AccordionSummary>
                    <MeetingRoomIcon />&nbsp;Logout
                </AccordionSummary>
                <AccordionDetails>
                    <Logout />
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default Menu;