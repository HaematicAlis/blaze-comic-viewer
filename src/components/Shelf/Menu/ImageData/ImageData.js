import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Grid, Typography } from '@material-ui/core';

const ImageData = () => {
    const selected = useSelector((state) => state.selected);
    const page = useSelector((state) => state.page);

    return (
        <Container maxWidth={false}>
            <Grid container direction="column" align="center">
                <Grid item>
                    {selected.images[page] ? (<>
                        <Typography variant="body1" style={{color: '#ccc'}}>{`Name: ${selected.images[page].name}`}</Typography>
                        <Typography variant="body1" style={{color: '#ccc'}}>{`Size: ${selected.images[page].size}`}</Typography>
                        <Typography variant="body1" style={{color: '#ccc'}}>{`Type: ${selected.images[page].fileType}`}</Typography></>
                    ) : <Typography variant="body1" style={{color: '#ccc'}}>Not viewing any image.</Typography>}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ImageData;