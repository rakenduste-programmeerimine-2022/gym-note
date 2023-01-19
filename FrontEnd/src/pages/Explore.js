import {Avatar, Box, Button, Container, Divider, Grid, Stack} from "@mui/material";

function ViewGymNote(){

    return (
        <Box paddingX={2} paddingY={1}>
        <Stack direction="row">
                <Avatar sx={{ width: 200, height: 200, border: 3, borderColor: "black"}} alt="sampleAvatar" src="https://static.wikia.nocookie.net/920e1790-1906-4589-b762-2eee2311b265" variant="square"/>
                <Stack textAlign={"left"} fontSize={20} direction="column" paddingLeft={2} alignItems="stretch">
                    <Box fontSize={24} fontFamily={""} sx={{height: 65}}>Name's gymnote</Box>
                    <Box sx={{height: 100}}>Today's gym session was intense but rewarding. I started with a warm-up on the treadmill, followed by a circuit of weightlifting exercises targeting different muscle groups. I pushed myself to lift heavier weights and do more reps</Box>
                    <Box textAlign={"right"}><Button variant={"contained"} sx={{width:175}}>View GymNote</Button></Box>
                </Stack>
        </Stack>
        </Box>
    )
}

export default function Explore(){
    return (
    <Container fixed>
        <Box sx={{bgcolor: '#9b9b9b', height: '120vh'}}>
            <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                EXPLORE:</Box>
            <Box paddingX={8}>
            <Stack direction="column" justifyContent="center" alignItems="flex-start" variant='background' style={{ backgroundColor: '#bfbfbf', color: "black", fontFamily: "roboto"}} divider={<Divider orientation="horizontal" flexItem />}>
                <ViewGymNote/>
                <ViewGymNote/>
            </Stack>
        </Box>
        </Box>
    </Container>
    )
}
