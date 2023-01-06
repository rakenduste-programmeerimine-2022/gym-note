import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {Button, Container, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";
import Box from "@mui/material/Box";


function ExerciseTable(){
    return(
        <Box paddingX={10} fontFamily={"Inter"}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "gray" }}>
                        <TableCell>Exercise</TableCell>
                        <TableCell>Reps</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>Failure</TableCell>
                        <TableCell>Notes</TableCell>
                    </TableRow>
                </TableHead>
                <CurrentRow></CurrentRow>
            </Table>
        </Box>
    )
}

function CurrentRow(){
    return(
    <TableBody>
        <TableRow>
            <TableCell>
                <Button variant="contained"   onClick={() => AddRow() }>Add exercise...</Button>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell> {/* These bunch of tablecells are just for cosmetic effect, plz no touchy*/}
        </TableRow>
    </TableBody>
    )
}

export default function NewGymNote(){
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#9b9b9b', height: '100vh' }}>
                    <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                        TODAY'S GYMNOTE:</Box>

                    <Box paddingX={10} fontFamily={"Inter"} paddingBottom={5}>
                        <TextField sx={{ backgroundColor: 'white'}} //TODO: fix the font, set to Inter
                                   id="NoteDescription" label="Description" variant="outlined" fullWidth multiline> Why can I put random text here lol </TextField>
                    </Box>
                    <ExerciseTable/>
                </Box>
            </Container>
        </React.Fragment>
    )
}
