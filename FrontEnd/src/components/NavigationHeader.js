import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from "@mui/material/styles";

const StyledTab = styled(Tab)({
    color: "black",
    fontSize: 20,

    "&.Mui-selected":{
        color: "gray",
        indicatorColor: "red",
    }
})
export default function NavigationHeader() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%'}}>
                <Tabs value={value} onChange={handleChange} indicatorColor="">
                    <StyledTab label="New GymNote" />
                    <StyledTab label="My GymNotes" />
                    <StyledTab label="Explore" />
                    <StyledTab label="Guides" />
                    <StyledTab label="My Profile"/>
                </Tabs>
            </Box>
        </>
    );
}