import { FormControlLabel } from "@mui/material";
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import colors from "../../../Utils/colors";
import { useState } from "react";

const colorChange = () => {
  setColor(colors.switchColorOff)
  return color
}


function CusSwitch(props) {
  const { label, onChange, checked = { checked } } = props;
  const [color, setColor] = useState(colors.switchColorOn)
  const ColoredSwitch = styled(Switch)(({ theme }) => ({

    '& .MuiSwitch-switchBase.Mui-checked': {
      color: color,
      '&:hover': {
        backgroundColor: ""
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: color,
    },
  }));


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