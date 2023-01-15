import * as React from "react";
import Box from "@mui/material/Box";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function SelectPrivacy() {
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