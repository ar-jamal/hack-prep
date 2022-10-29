import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function CusSelect(props) {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value}
                label={props.label}
                onChange={props.onChange}
            >
                <MenuItem >{props.child01}</MenuItem>
                <MenuItem >{props.child02}</MenuItem>
                { props.child03 && <MenuItem >{props.child03}</MenuItem>}
                { props.child04 && <MenuItem >{props.child04}</MenuItem>}
            </Select>
            </FormControl>
        </Box>
    );
}
