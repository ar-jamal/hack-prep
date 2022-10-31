import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CusSelect(props) {
  // const MenuList = {}
  console.log(props.child[1])
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
          {props.child.map((e, i) => {
            return <MenuItem key={i} value= "dffddda">{props.child[i]}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
