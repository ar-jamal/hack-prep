import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Input from "./utils/components/MaterialUi/inputField";
import CusSelect from "./utils/components/MaterialUi/select";
import DatePicker from "./utils/components/MaterialUi/dateObj";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary
// }));


function App() {
  const [inputValues, setInputValues] = useState({});
  const [course, setCourse] = useState("");
  const [sec, setSec] = useState("");
  const [dateValue, setDateValue] = useState(null);
  // const [changeDate, setChangeDate] =useState("")

  const inputChangeHandler = (key, val) => {
    console.log(val)
    inputValues[key] = val;
    setInputValues({ ...inputValues });
    console.log(inputValues);
  };
  const dateChangeHandler = (val) => {
    setDateValue(val);
    // console.log(val)
    inputValues["date"] = val;
    setInputValues({ ...inputValues });
    // console.log(val)
  };
  const onCourChangeHandler = (key, val) => {
    setCourse(val)
    inputValues[key] = val
    setInputValues({ ...inputValues })
    console.log(inputValues)
  };
  const onSecChangeHandler = (key, val) => {
    setSec(val);
    inputValues[key] = val
    setInputValues({ ...inputValues })
    console.log(inputValues)
  };

  return (
    <div className="Layout">
      <h2 style={{ marginBlock: "4%", fontSize: 28 }} >STUDENT FORM</h2>
      <div className="Body">
        <Grid
          container
          columnSpacing={3} /* columns={12} */
        >
          <Grid item xs={4}>
            <Input
              required={true}
              label="First Name"
              onChange={(e) => inputChangeHandler("First Name", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              label="Last Name"
              onChange={(e) => inputChangeHandler("Last Name", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              required={true}
              label="Contact"
              onChange={(e) => inputChangeHandler("Contact", e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <CusSelect
              label="Course *"
              onChange={(e) => onCourChangeHandler("Course", e.target.value)}
              value={course}
              child01="Mobile & Web Development"
              child02="Python"
              child03="Machine Learning"
              child04="English Language"
            />
          </Grid>
          <Grid item xs={4}>
            <CusSelect
              label="Sec *"
              onChange={(e) => onSecChangeHandler("Sec", e.target.value)}
              value={sec}
              child01="Sec A"
              child02="Sec B"
              child03="Sec C"
            // child={["Sec A", "Sec B", "Sec C"]}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required={true}
              label="CNIC"
              onChange={(e) => inputChangeHandler("CNIC", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required={true}
              label="Father Name"
              onChange={(e) => inputChangeHandler("Father Name", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Father CNIC"
              onChange={(e) => inputChangeHandler("Father CNIC", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              required={true}
              label="Father Contact"
              onChange={(e) =>
                inputChangeHandler("Father Contact", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required={true}
              label="Emergency Contact"
              onChange={(e) =>
                inputChangeHandler("Emergency Contact", e.target.value)
              }
            />
          </Grid>
          <Grid item
            style={{ marginBlock: 20 }}
            xs={4}>
            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              defaultValue="2017-05-24"
              onChange={(e) => dateChangeHandler(e.target.value)}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <Input
              label="Age"
            // onChange={false}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          style={{
            width: "15%",
            alignSelf: "end",
            marginBlock: 20,
            fontSize: 18
          }}
        // onClick={onSubmitHandler}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}

export default App;
