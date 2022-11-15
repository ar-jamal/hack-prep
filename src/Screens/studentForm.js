import "../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../utils/components/MaterialUi/cusInput";
import CusSelect from "../utils/components/MaterialUi/cusSelect";
import CusAlert from "../utils/components/MaterialUi/cusAlert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

export default function StudentForm() {
  const [filledForm, setFilledForm] = useState({});
  const [course, setCourse] = useState("");
  const [sec, setSec] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [age, setAge] = useState("");
  const [agedisabled, setAgedisabled] = useState(false);
  const [open, setOpen] = useState(false);

  const inputChangeHandler = (key, val) => {
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
  };
  const dateChangeHandler = (key, val) => {
    const dateString = val.toString();
    const formattedDate = new Date(dateString).toString().slice(4, 15);
    const curDate = new Date().toDateString().slice(4, 15);
    const miliSec = Date.parse(curDate) - Date.parse(`${formattedDate}`);
    const year = Math.floor(miliSec / (1000 * 60 * 60 * 24 * 365)) || "";
    setAge(year);

    filledForm["date"] = val;
    setFilledForm({ ...filledForm });
  };

  const onCourChangeHandler = (key, val) => {
    setCourse(val);
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
  };
  const onSecChangeHandler = (key, val) => {
    setSec(val);
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
  };
  const onAlertClose = () => {
    setOpen(false);
    setAgedisabled(false);
  };
  const ageDisabledHandler = () => {
    setAgedisabled(true);
    setOpen(true);
    // return <CusAlert open={open} onClose={onAlertClose} />
  };

  const onSubmitHandler = () => {
    filledForm.registrationDate = new Date().toISOString().slice(0, 10)
    filledForm.isFeeSubmitted = false
    filledForm.isApproved = false
    filledForm.isActive = false
    console.log(filledForm)
  }

  const loginDetailFromReducer = useSelector((a) => a.loginReducer)
    console.log(loginDetailFromReducer)

  return (
    <div className="Layout">
      <h2 style={{ marginBlock: "4%", fontSize: 28 }}>{loginDetailFromReducer.userName}</h2>
      {/* <h2 style={{ marginBlock: "4%", fontSize: 28 }}>REGISTRATION FORM</h2> */}
      <div className="Body">
        <Grid container columnSpacing={3} /* columns={12} */>
          <Grid item xs={4}>
            <CusInput
              required={true}
              label="First Name"
              onChange={(e) => inputChangeHandler("firstName", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <CusInput
              label="Last Name"
              onChange={(e) => inputChangeHandler("lastName", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <CusInput
              required={true}
              label="Contact"
              onChange={(e) => inputChangeHandler("contact", e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <CusSelect
              label="Course *"
              onChange={(e) => onCourChangeHandler("course", e.target.value)}
              value={course}
              dataSource={[
                { id: "wm", fullName: "Web & Mobile Development" },
                { id: "py", fullName: "Python" },
                { id: "ml", fullName: "Machine Learning" },
                { id: "el", fullName: "English Language" },
              ]}
            />
          </Grid>
          <Grid item xs={4}>
            <CusSelect
              label="Sec *"
              onChange={(e) => onSecChangeHandler("sec", e.target.value)}
              value={sec}
              dataSource={[
                {
                  id: "a",
                  fullName: "A",
                },
                {
                  id: "b",
                  fullName: "B",
                },
                {
                  id: "c",
                  fullName: "C",
                },
              ]}
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              required={true}
              label="CNIC"
              onChange={(e) => inputChangeHandler("CNIC", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Father Name"
              onChange={(e) =>
                inputChangeHandler("Father Name", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              label="Father CNIC"
              onChange={(e) =>
                inputChangeHandler("Father CNIC", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Father Contact"
              onChange={(e) =>
                inputChangeHandler("Father Contact", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              required={true}
              label="Emergency Contact"
              onChange={(e) =>
                inputChangeHandler("Emergency Contact", e.target.value)
              }
            />
          </Grid>
          <Grid item style={{ marginBlock: 20 }} xs={4}>
            <TextField
              id="date"
              label="Date of Birth"
              type="date"
              // defaultValue={new Date().toISOSting()}
              onChange={(e) => dateChangeHandler("Date", e.target.value)}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <CusAlert
              label="Age"
              placeholder={age ? age.toString() : "Age"}
              onClick={ageDisabledHandler}
              disabled={agedisabled}
              value={!!age && age > 0 ? age : "Plz select back date for date of birth"}
              open={open}
              onClose={onAlertClose}
              dialogTitle="Date of Birth required only"
              dialogMessage="Age will be calculated on it"
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
          onClick={onSubmitHandler}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
}
