import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {
    Button,
    Checkbox,
    Container, FormControl,
    IconButton, InputLabel, MenuItem, Select, Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';

function ExerciseTable(props) {
    const { tableData, setTableData, editMode, setEditMode } = props;
    return (
        <Box fontFamily={"Inter"}>
            <Table sx={{backgroundColor: "#929292" }}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "gray" }}>
                        <TableCell>Exercise</TableCell>
                        <TableCell>Reps</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>Failure</TableCell>
                        <TableCell>Notes</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => ( /* Here goes what the rows look like at first*/
                        <TableRow key={row.id} onClick={() => setEditMode({ ...editMode, [row.id]: !editMode[row.id] })}>
                            {editMode[row.id] ? (
                                <>
                                    <TableCell>{row.exercise}</TableCell>
                                    <TableCell>{row.reps}</TableCell>
                                    <TableCell>{row.weight}</TableCell>
                                    <TableCell>{row.failure ? "Yes" : "No"}</TableCell>
                                    <TableCell>{row.notes}</TableCell>
                                </>
                            ) : (
                                <>
                                    <TableCell>
                                        <TextField sx={{backgroundColor: 'white'}} id={`exercise-${row.id}`} variant="outlined" defaultValue={row.exercise} />
                                    </TableCell>
                                    <TableCell>
                                        <TextField sx={{backgroundColor: 'white'}} id={`reps-${row.id}`} variant="outlined" defaultValue={row.reps} />
                                    </TableCell>
                                    <TableCell>
                                        <TextField sx={{backgroundColor: 'white'}} id={`weight-${row.id}`} variant="outlined" defaultValue={row.weight} />
                                    </TableCell>
                                    <TableCell>
                                        <Checkbox id={`failure-${row.id}`} defaultValue={row.failure} />
                                    </TableCell>
                                    <TableCell>
                                        <TextField sx={{backgroundColor: 'white'}} id={`notes-${row.id}`} variant="outlined" defaultValue={row.notes} />
                                    </TableCell>
                                </>
                            )}
                            <TableCell> <IconButton><EditIcon/></IconButton> </TableCell>
                        </TableRow>

                    ))}
                    <TableRow>
                        <TableCell>
                            <Button variant="contained" onClick={() => handleAddRow(tableData, setTableData, editMode, setEditMode)}>Add exercise...</Button>
                        </TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    );
} /* MAJOR BUG!!!!!!!!!! FIX SOMEDAY!!!!!!!!!!!!!!! */

function handleAddRow(tableData, setTableData, editMode, setEditMode) {
    setEditMode({ ...editMode, [tableData[tableData.length - 1].id]: true }); //This does it so the last row is put out of the edit mode
    // Here are the default values
    const newRow = {
        id: tableData.length + 1,
        exercise: "",
        reps: 0,
        weight: 0,
        failure: false,
        notes: "",
    };

    // Here it adds a new row
    setTableData([...tableData, newRow]);
}

function SelectPrivacy() {
    const [privacy, setPrivacy] = React.useState('');

    const handleChange = (event) => {
        setPrivacy(event.target.value);
    };

    return (
        <Box sx={{ width:"10vw" }}>
            <FormControl variant={"filled"} fullWidth>
                <InputLabel id="PrivacySelectLabel">Visibility</InputLabel> {/* TODO: Maybe add a default select? Seems kind of a hassle to do rn but if we have the time */}
                <Select
                    labelId="PrivacySelectLabel"
                    id="PrivacySelect"
                    value={privacy}
                    label="Privacy"
                    onChange={handleChange}
                >
                    <MenuItem value={false}>Public</MenuItem>
                    <MenuItem value={true}>Private</MenuItem>
                </Select>
            </FormControl>
        </Box>
        )
    }

export default function NewGymNote() {
    const [editMode, setEditMode] = React.useState({});
    const [tableData, setTableData] = React.useState([
        {
            id: 1,
            exercise: "Bench Press",
            reps: 8,
            weight: 135,
            failure: false,
            notes: "",
        },
    ]);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Container fixed>
                <Box sx={{bgcolor: '#9b9b9b', height: '100vh'}}>
                    <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                        TODAY'S GYMNOTE:</Box>
                    <Box paddingX={10} paddingTop={5}>
                        <Box fontFamily={"Inter"} paddingBottom={5}>
                            <TextField sx={{backgroundColor: 'white'}} //TODO: fix the font, set to Inter
                                       id="NoteDescription" label="Description" variant="outlined" fullWidth multiline> Why
                                can I put random text here lol </TextField>
                        </Box>
                        <ExerciseTable tableData={tableData} setTableData={setTableData} editMode={editMode} setEditMode={setEditMode} />
                        <Stack direction="row" justifyContent="flex-end" spacing={8} paddingTop={5}>
                            <SelectPrivacy/> <Button variant={"contained"}>Save gym note...</Button>
                        </Stack>
                    </Box>
                </Box> {/*This is getting really long... Should I maybe move the table into components? I honestly don't know and don't wanna break anything*/}
            </Container>
        </React.Fragment>
    )
}
