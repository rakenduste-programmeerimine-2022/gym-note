import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {Container, Grid, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function NewGymNote(){
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#9b9b9b', height: '100vh' }}>
                    <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                        TODAY'S GYMNOTE:</Box>

                    <Box paddingX={10} fontFamily={"Inter"}>
                        <TextField sx={{ backgroundColor: 'white', fontFamily: 'inter'}} //TODO: fix the font, set to Inter
                                   id="NoteDescription" label="Description" variant="outlined" fullWidth multiline> Why can I put random text here lol </TextField>
                        <Grid2 container spacing={6}>
                            <Grid xs={4}>
                                <p>Test</p>
                                <p>Test 2</p>
                                <p>Test 3</p>
                            </Grid>
                            <Grid xs={4}>
                                <p> Row 1</p>
                                <p> Row 2</p>
                                <p> Row 3</p>
                            </Grid>
                        </Grid2>
                    </Box>
                </Box>
            </Container>
        </React.Fragment>
    )
}