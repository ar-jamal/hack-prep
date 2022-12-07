import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioGroupForm(props) {
  const { value, formLabel, onChange, dataSource } = props;

  return (
    <div>
      <FormControl sx={{ display: "flex", flexDirection: "row" }}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          {formLabel || null}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onChange}
        >
          {!!dataSource && dataSource.length > 0
            ? dataSource.map((e, i) => (
                <FormControlLabel
                  key={i}
                  value={e.value}
                  control={<Radio />}
                  label={e.label}
                />
              ))
            : null}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
