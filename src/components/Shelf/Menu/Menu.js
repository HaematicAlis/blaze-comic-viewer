import React, { useEffect, useState } from 'react';

import { cookies } from '../../../index.js';
import Upload from './Upload/Upload.js';
import Vocab from './Vocab/Vocab.js';
import Sort from './Sort/Sort.js';
import Pages from './Pages/Pages.js';
import Dictionary from './Dictionary/Dictionary.js';
import ImageData from './ImageData/ImageData.js';
import Changelog from './Changelog/Changelog.js';
import Logout from './Logout/Logout.js';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ImageIcon from '@material-ui/icons/Image';
import PublishIcon from '@material-ui/icons/Publish';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import { Accordion, AccordionSummary, AccordionDetails, Container } from '@material-ui/core';
import useStyles from './styles.js';

const Menu = () => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        let exp = cookies.get('Expanded');
        exp && setExpanded(exp);
    }, [expanded]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        cookies.set('Expanded', newExpanded ? panel : false, { secure: true });
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
            <Accordion expanded={expanded === 'pages'} onChange={handleChange('pages')}>
                <AccordionSummary>
                    <FormatListNumberedIcon />&nbsp;Pages
                </AccordionSummary>
                <AccordionDetails>
                    <Pages />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'dictionary'} onChange={handleChange('dictionary')}>
                <AccordionSummary>
                    <FindInPageIcon />&nbsp;Dictionary
                </AccordionSummary>
                <AccordionDetails>
                    <Dictionary />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'sort'} onChange={handleChange('sort')}>
                <AccordionSummary>
                    <SwapHorizIcon />&nbsp;Sort By
                </AccordionSummary>
                <AccordionDetails>
                    <Sort />
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
            <Accordion expanded={expanded === 'changelog'} onChange={handleChange('changelog')}>
                <AccordionSummary>
                    <CallSplitIcon />&nbsp;Changelog
                </AccordionSummary>
                <AccordionDetails>
                    <Changelog />
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