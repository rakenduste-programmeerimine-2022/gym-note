import {Avatar, Box, Button, Container, Grid, Modal, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";
import NewGymNote from "./NewGymNote";
import SelectPrivacy from "../components/SelectPrivacy";

function UserDesc(){
    return (
    "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words."
)}

function ProfileMode(){
    const [editMode, setProfileMode] = useState(false);
    return (
        editMode ? (
            <>
                <Grid item xs={3}>
                    <Avatar sx={{ width: 200, height: 200, border: 3, borderColor: "black"}} alt="sampleAvatar" src="https://static.wikia.nocookie.net/920e1790-1906-4589-b762-2eee2311b265" variant="square"/>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                </Grid>
                <Grid item xs={8} textAlign="left" fontSize={"20"} color={"black"} fontFamily={"Roboto"}>
                    <TextField sx={{backgroundColor: 'white'}} id="username" variant={"filled"} size={"small"} label={"Name"} margin={"normal"}></TextField> <br/>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField sx={{backgroundColor: 'white'}} id="birthday" type="date" defaultValue="2017-05-24" variant={"filled"} size={"small"} label={"Birthday"} margin={"normal"}       InputLabelProps={{
                                shrink: true,
                            }}></TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <SelectPrivacy/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField sx={{backgroundColor: 'white'}} id="email" variant={"filled"} size={"small"} label={"Email"} margin={"normal"}></TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <SelectPrivacy/>
                        </Grid>
                    </Grid>

                    <br/><TextField sx={{backgroundColor: 'white'}} id="userDescription" variant={"filled"} fullWidth multiline label={"Description"}></TextField> <br/>
                    <Stack direction="row" justifyContent="flex-end" spacing={8} paddingTop={5}>
                        <Button variant={"contained"} onClick={()=> setProfileMode(!editMode)}>Save profile</Button>
                    </Stack>
                </Grid>
            </>
        ) : (
            <>
                <Grid item xs={3}>
                    <Avatar sx={{ width: 200, height: 200, border: 3, borderColor: "black"}} alt="sampleAvatar" src="https://static.wikia.nocookie.net/920e1790-1906-4589-b762-2eee2311b265" variant="square"/>
                </Grid>
                <Grid item xs={8} textAlign="left" fontSize={"20"} color={"black"} fontFamily={"Roboto"}>
                    <p>Name: GymLover69</p>
                    <p>Email: samplemail@realmail.ee</p>
                    <p>Birthday: 12.12.2012</p>
                    <p>About me: </p> <UserDesc/>
                    <Stack direction="row" justifyContent="flex-end" spacing={8} paddingTop={5}>
                        <Button variant={"contained"} onClick={()=> setProfileMode(!editMode)}>Edit profile</Button>
                    </Stack>
                </Grid>
            </>
        )
    );
}

export default function ProfilePage(){
    const [editMode, setProfileMode] = useState(false);

    function ProfileDataFields(){
        return({
            name: <TextField></TextField>,
            email: <TextField></TextField>,
            birthday: <TextField></TextField>,
            description: <TextField fullwidth multiline></TextField>
        }
        )
    }

    return(
        <>
            <Container fixed>
                <Box sx={{bgcolor: '#9b9b9b', height: '120vh'}}>
                    <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                        USER PROFILE:</Box>
                    <Grid container spacing={0.5} paddingX={8} paddingTop={5}>
                        <ProfileMode/>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}