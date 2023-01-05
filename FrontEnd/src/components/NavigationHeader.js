import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from "@mui/material/styles";

const StyledTab = styled(Tab)({
    color: "black",

    "&.Mui-selected":{
        color: "gray",
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
                <Tabs value={value} onChange={handleChange} centered>
                    <StyledTab label="Item One" />
                    <StyledTab label="Item Two" />
                    <StyledTab label="Item Three" />
                </Tabs>
            </Box>
        </>
    );
}