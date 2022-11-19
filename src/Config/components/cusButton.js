import React from "react";
import {Button} from "@mui/material"

export default function CusButton(props) {
  const { onClick, variant, title, style } = props;
  return (
    <Button
      variant={variant ?? "contained"}
      style={[
        {
          minWidth: "15%",
          marginBlock: 20,
          fontSize: 18,
        },style
      ]}
      onClick={onClick}
    >
      {title ?? "SUBMIT"}
    </Button>
  );
}
