import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function CusChip() {
  const [chipData, setChipData] = React.useState([
    { label: "dummmy01", variant: "outlined" },
    { label: "dummmy02", variant: "outlined" },
    { label: "dummmy03", variant: "outlined" },
    { label: "dummmy04", variant: "outlined" },
    { label: "dummmy05", variant: "outlined" },
  ]);

  const handleClick = (val) => {
    const copyChipData = [...chipData]
    copyChipData[val].variant =  chipData[val].variant === "outlined" ? "" : "outlined"
    setChipData([...copyChipData]);
  };

  return (
    <Stack direction="row" spacing={1}>
      {chipData.map((e, i) => (
        <Chip
          key={i}
          label={e.label}
          onClick={() => handleClick(i)}
          variant={e.variant}
        />
      ))}
    </Stack>
  );
}
