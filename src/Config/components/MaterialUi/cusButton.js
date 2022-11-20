import React, { Image, useState } from "react";
import { Button } from "@mui/material"
import blueSpinner from "../../Utils/Gif/blueSpinner.gif"



export default function CusButton(props) {
  const { onClick, variant, title, style, width, marginBlock, alignSelf, loader, backgrounColor } = props;

  const loaderHandler = 
    <img
      style={{ width: "20px" }}
      src={blueSpinner} />

  return (
    <Button
      variant={variant ?? "contained"}
      style={
        {
          minWidth: '15%',
          height: 50,
          marginBlock: marginBlock ?? 20,
          fontSize: 15,
          alignSelf: alignSelf ?? "flex-end",
          backgroundColor: backgrounColor || "blue",
        }
      }
      onClick={onClick}
    >
      {loader ? loaderHandler : title ?? "SUBMIT"}
    </Button>
  );
}
