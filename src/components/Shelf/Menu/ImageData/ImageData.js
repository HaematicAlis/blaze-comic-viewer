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
                    {selected[page] ? (<>
                        <Typography variant="body1" color="secondary">{`Name: ${selected[page].name}`}</Typography>
                        <Typography variant="body1" color="secondary">{`Size: ${selected[page].size}`}</Typography>
                        <Typography variant="body1" color="secondary">{`Type: ${selected[page].fileType}`}</Typography></>
                    ) : <Typography variant="body1" color="secondary">Not viewing any image.</Typography>}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ImageData;