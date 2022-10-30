import { TextField } from "@mui/material";

export default function Input(props) {
  return (
    <TextField
      required={props.required}
      style={{ margin: 20, width: "100%", alignSelf: "center" }}
      label={props.label}
      onChange={props.onChange}
      // value={inputValues[data[i]]}
    />
  );
}
