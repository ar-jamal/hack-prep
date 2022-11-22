import React, { Image, useState } from "react";
import { Button } from "@mui/material";
import blueSpinner from "../../utils/GIF/blueSpinner.gif";

export default function CusButton(props) {
  const {
    onClick,
    variant,
    title,
    marginBlock,
    alignSelf,
    loader,
    backgroundColor,
    color,
    minWidth,
    height,
    fontSize,
    padding,
  } = props;

  const loaderHandler = <img style={{ width: "20px" }} src={blueSpinner} />;

  return (
    <Button
      variant={variant}
      size= "medium"
      sx={{
        minWidth: minWidth,
        height: height,
        marginBlock: marginBlock,
        fontSize: fontSize ?? "18px",
        padding: padding?? "30px",
        // fontWeight: "10px",
        alignSelf: alignSelf,
        backgroundColor: backgroundColor,
        color: color,
        
      }}
      onClick={onClick}
    >
      {loader ? loaderHandler : title ?? "SUBMIT"}
    </Button>
  );
}
