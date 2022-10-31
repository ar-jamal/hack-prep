import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CusSelect(props) {
  // const MenuList = {}
  // console.log(props.child)
  return (
    <Box sx={{ minWidth: 120, marginY: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
          {props.child01 && <MenuItem value={props.child01}>{props.child01}</MenuItem>}
          {props.child02 && <MenuItem value={props.child02}>{props.child02}</MenuItem>}
          {props.child03 && <MenuItem value={props.child03}>{props.child03}</MenuItem>}
          {props.child04 && <MenuItem value={props.child04}>{props.child04}</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
}
