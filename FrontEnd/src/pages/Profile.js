import {Avatar, Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {useState} from "react";

function UserDesc(){
    return "What the fuck did you just fucking say about me, you little bitch?" +
        " I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in " +
        "numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla" +
        " warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another " +
        "target. I will wipe you the fuck out with precision the likes of which has never been seen before on " +
        "this Earth, mark my fucking words."
}

export default function ProfilePage(){
    const [ProfileData, setProfileData] = useState({
        name: "GymLover69",
        email: "SampleEmail@email.com",
        birthday: "69.69.1969",
        description: "What the fuck did you just fucking say about me, you little bitch?" +
            " I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in " +
            "numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla" +
            " warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another " +
            "target. I will wipe you the fuck out with precision the likes of which has never been seen before on " +
            "this Earth, mark my fucking words."
    });
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
                <Box sx={{bgcolor: '#9b9b9b', height: '100vh'}}>
                    <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                        USER PROFILE:</Box>
                    <Grid container spacing={0.5} paddingX={8} paddingTop={5}>
                        <Grid item xs={3}>
                            <Avatar sx={{ width: 200, height: 200, border: 3, borderColor: "black"}} alt="sampleAvatar" src="https://static.wikia.nocookie.net/920e1790-1906-4589-b762-2eee2311b265" variant="square"/>
                        </Grid>
                        <Grid item xs={8} textAlign="left" fontSize={"20"} color={"black"} fontFamily={"Roboto"}>
                                Name: {ProfileData.name} <br/>
                                Email: {ProfileData.email} <br/>
                                Birthday: {ProfileData.birthday} <br/>
                                About me: <br/>{ProfileData.description} <br/>
                            <Stack direction="row" justifyContent="flex-end" spacing={8} paddingTop={5}>
                                <Button variant={"contained"} onClick={()=> setProfileData(ProfileDataFields)}>Edit profile</Button>
                                <Button variant={"contained"}>Save profile</Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}