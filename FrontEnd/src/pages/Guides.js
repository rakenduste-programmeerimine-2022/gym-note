import {Avatar, Box, Button, Container, Divider, Grid, Stack} from "@mui/material";
import placeholder from "../images/placeholder.png"
import { redirect } from "react-router-dom";
import Guide1 from "../pages/Guide1";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";

function GuideButton(){
    return (
        <Grid item sx={{bgcolor: '#9b9b9b'}} xs={3}>
        <Button variant="contained" href="Page1">
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
