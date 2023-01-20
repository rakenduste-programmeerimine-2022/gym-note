import {Box, Container, Stack} from "@mui/material";

export default function LogOnPage(){
    return (
        <Container fixed>
            <Box sx={{bgcolor: '#9b9b9b', height: '120vh'}}>
                <Box textAlign={"left"} lineHeight={3} paddingLeft={3} color={"black"} fontSize={30}>
                LOG IN:</Box>
                <Box paddingX={8}>
                <Stack direction="column" justifyContent="center" alignItems="flex-start" variant='background' style={{ backgroundColor: '#bfbfbf', color: "black", fontFamily: "roboto"}}>
                    <Stack direction={"row"} justifyContent="center" alignItems="left" spacing={2}>
                        <Box paddingY={2} paddingX={2} fontSize={24}>Username:</Box>
                        <Box paddingY={1}><input type="text" name="username" style={{width: "100%", height: "50px", fontSize: "20px", display: "block"}}/></Box>
                    </Stack>
                    <Stack direction={"row"} justifyContent="center" alignItems="left" spacing={2}>
                        <Box paddingY={2} paddingX={2} fontSize={24}>Password:</Box>
                        <Box paddingY={1}><input type="password" name="password" style={{width: "100%", height: "50px", fontSize: "20px", display: "block"}}/></Box>
                    </Stack>
                    </Stack>
                </Box>
            </Box>
        </Container>
    )
}