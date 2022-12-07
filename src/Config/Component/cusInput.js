import { TextField } from "@mui/material";

export default function CusInput(props) {
  
  return (
    <TextField
      required={props.required}
      style={{
        marginTop: props.marginTop || 20,
        marginBottom: 20,
        width: "100%",
        alignSelf: "center",
        backgroundColor: props.backgroundColor
      }}
      label={props.label}
      onChange={props.onChange}
      value={props.value}
      disabled={props.disabled}
      placeholder={props.placeholder}
      onClick={props.onClick}
      type={props.type}
      InputLabelProps={{
        shrink: props.shrink,
      }}
    />
  );
}
