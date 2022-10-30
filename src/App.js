import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Input from "./utils/components/MaterialUi/inputField";
import CusSelect from "./utils/components/MaterialUi/select";
import DatePicker from "./utils/components/MaterialUi/dateObj";
import dayjs from "dayjs";

function App() {
  const [inputValues, setInputValues] = useState({});
  const [course, setCourse] = useState("");
  const [sec, setSec] = useState("");
  const [dateValue, setDateValue] = useState(dayjs("2014-08-18T21:11:54"));
  // const [changeDate, setChangeDate] =useState("")

  const inputChangeHandler = (key, val) => {
    setCourse(val);
    setSec(val);
    inputValues[key] = val;
    setInputValues({ ...inputValues });
    console.log(inputValues);
  };
  const dateChangeHandler = (val) => {
    setDateValue(val);
    inputValues["date"] = val;
    setInputValues({ ...inputValues });
  };
  const onSelectChangeHandler = (val) => {
    setCourse(val);
  };

  return (
    <div className="Layout">
      {/* <div className="Header-view"> */}
      <h2>Student Form</h2>
      {/* </div> */}
      <div className="Body">
        <Grid Container>
        <Grid item >

    </Grid>
          <Input
            required={true}
            label="First Name"
            onChange={(e) => inputChangeHandler("First Name", e.target.value)}
          />
          <Input
            label="Last Name"
            onChange={(e) => inputChangeHandler("Last Name", e.target.value)}
          />
          <CusSelect
            label="Course *"
            onChange={(e) => inputChangeHandler("Course", e.target.value)}
            value={course}
            child={[
              "Mobile & Web Development",
              "Python",
              "Machine Learning",
              "English Language",
            ]}
          />
          <CusSelect
            label="Sec *"
            onChange={(e) => onSelectChangeHandler("Sec", e.target.value)}
            value={sec}
            child={["Sec A", "Sec B", "Sec C"]}
          />
          <Input
            required={true}
            label="Contact"
            onChange={(e) => inputChangeHandler("Contact", e.target.value)}
          />
          <Input
            required={true}
            label="CNIC"
            onChange={(e) => inputChangeHandler("CNIC", e.target.value)}
          />
          <Input
            required={true}
            label="Father Name"
            onChange={(e) => inputChangeHandler("Father Name", e.target.value)}
          />
          <Input
            label="Father CNIC"
            onChange={(e) => inputChangeHandler("Father CNIC", e.target.value)}
          />
          <Input
            required={true}
            label="Father Contact"
            onChange={(e) =>
              inputChangeHandler("Father Contact", e.target.value)
            }
          />
          <Input
            required={true}
            label="Emergency Contact"
            onChange={(e) =>
              inputChangeHandler("Emergency Contact", e.target.value)
            }
          />
          <DatePicker
            label="Date of Birth"
            onChange={dateChangeHandler}
            value={dateValue}
          />
          <Input
            label="Age"
            onChange={(e) => inputChangeHandler("Last Name", e.target.value)}
          />
          <Button
            style={{ width: "15%", alignSelf: "center", margin: 20 }}
            variant="contained"
          >
            SUBMIT
          </Button>
        </Grid>
      </div>
    </div>
  );
}

export default App;
