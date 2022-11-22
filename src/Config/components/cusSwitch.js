import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import colors from "../../utils/COlors";
import { useState } from "react";


const ColoredSwitch = styled(Switch)(({ theme }) => ({

  '& .MuiSwitch-switchBase.Mui-checked': {
    color: colors.switchColorOn,
    '&:hover': {
      backgroundColor: ""
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: colors.switchColorOn,
  },
}));

function CusSwitch(props) {
  const { label, onChange,  } = props;
  return (
    <FormControlLabel control={
      <ColoredSwitch
        onChange={onChange}
      />
    }
      label={label}
    />
  );
}
export default CusSwitch;



{/* <CusSwitch
              label="is Form Open"
              checked= {checked}
              onChange={(event) => setChecked(event.target.checked)}
            /> */}