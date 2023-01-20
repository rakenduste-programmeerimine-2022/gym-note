import {Avatar, Box, Button, Container, Divider, Grid, Stack} from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import placeholder from "../images/placeholder.png"
import { redirect } from "react-router-dom";


function GuideButton(){

    return (
        <Grid item sx={{bgcolor: '#9b9b9b'}} xs={3}>
        <Button target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" variant="contained">
        <img src={placeholder} width={"220px"} height={"auto"}/>
        </Button>
        </Grid>
    )
}

export default function Guides(){

    return (
    <Container sx={{bgcolor: '#9b9b9b'}}>
     <Box sx={{bgcolor: '#9b9b9b'}}>
            <Grid container spacing={5}>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            <GuideButton/>
            </Grid>
     </Box>
    </Container>
    );
}
