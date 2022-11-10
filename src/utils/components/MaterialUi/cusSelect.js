import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CusSelect(props) {
  console.log(props)
  let { 
    label,
    value,
    onChange,
    dataSource,
    valueField,
    displayField
  } = props
  // const MenuList = {}
  // console.log(dataSource)
  return (
    <Box sx={{ minWidth: 120, marginY: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={onChange}
        >
          {dataSource && dataSource.length > 0 && displayField
            ? dataSource.map((e,i) => (
                <MenuItem value={e[valueField ? valueField : i? i : "id"]} key={i}>
                  {e[displayField ? displayField : i? i : "fullName"]}
                </MenuItem>
              )) : dataSource.map((e,i) => (
                <MenuItem key= {i} value={e} >{e}</MenuItem>
              ))}
        </Select>
      </FormControl>
    </Box>
  );
}
