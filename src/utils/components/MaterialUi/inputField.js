import { TextField } from "@mui/material"

export default function Input(props) {
    return (
        <TextField
            style={{ margin: 20, width: "70%", alignSelf: 'center' }}
            label={props.label}
            onChange={props.onChange}
        // value={inputValues[data[i]]}
        />
    )
}