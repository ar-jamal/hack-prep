import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Input from "../../utils/components/MaterialUi/inputField";
import CusSelect from "../../utils/components/MaterialUi/select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AlertDialog from "../../utils/components/MaterialUi/AlertDialog";

export default function QuizForm() {
  const [inputValues, setInputValues] = useState({});
  const [AssTrainers, setAssTrainers] = useState([]);
  const [IsFormOpen, setIsFormOpen] = useState("");

  const [open, setOpen] = useState(false);

  const inputChangeHandler = (key, val) => {
    console.log(val);
    inputValues[key] = val;
    setInputValues({ ...inputValues });
    console.log(inputValues);
  };

  const Options = (key, val) => {
    const options = [];
    options.push(val);
    inputValues["Options"] = [...options];
    setInputValues({ ...inputValues });
    // console.log(inputValues)
  };

  return (
    <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
      <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }}>
        COURSE FORM
      </h2>
      <div className="Body">
        <Grid container columnSpacing={3}>
          <Grid item xs={8}>
            <Input
              required={true}
              label="Question"
              // placeholder= "create questions"
              onChange={(e) => inputChangeHandler("Question", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              label="Correct Answer *"
              onChange={(e) =>
                inputChangeHandler("CorrectAnswer", e.target.value)
              }
            />
          </Grid>
          {/* <div style={{ marginTop: 30, marginBottom: 12, width: "100%", marginLeft: 24 }}>
            <hr />
          </div> */}
          <Grid item xs={12} sx={{ marginTop: "30" }}>
            <h4>OPTIONS: *</h4>
          </Grid>
          <Grid item xs={6}>
            <Input
              marginTop= "0"
              label="Option 1"
              onChange={(e) => Options("Option01", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              marginTop= "0"
              label="Option 2"
              onChange={(e) => Options("Option02", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              // marginTop= "10"
              label="Option 3"
              onChange={(e) => Options("Option03", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              // marginTop= "10"
              label="Option 4"
              onChange={(e) => Options("Option04", e.target.value)}
            />
          </Grid>
          <div style={{ marginBottom: 20,marginTop: 12, width: "100%", marginLeft: 24 }}>
            {/* <hr /> */}
          </div>
          <Grid item xs={12}>
            <Input
              label="Duration *"
              onChange={(e) => inputChangeHandler("Duration", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Total Marks"
              onChange={(e) => inputChangeHandler("TotalMarks", e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          style={{
            width: "15%",
            alignSelf: "end",
            marginBlock: 20,
            fontSize: 18,
          }}
          // onClick={onSubmitHandler}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
