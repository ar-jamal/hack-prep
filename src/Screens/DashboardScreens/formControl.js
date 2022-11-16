import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../utils/components/MaterialUi/cusInput";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CusAlert from "../../utils/components/MaterialUi/cusAlert";
import CusSwitch from "../../utils/components/MaterialUi/cusSwitch";

export default function FormControl() {
  const [filledForm, setFilledForm] = useState({});
  const [trainers, setTrainers] = useState(0);
  const [assTrainers, setAssTrainers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState("");
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("")

  const onCourChangeHandler = (key, val) => {
    setCourse(val);
    filledForm[key] = val;
    // setFilledForm({ ...filledForm });
  };
  const inputChangeHandler = (key, val) => {
    // console.log(trainers);
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
    // console.log(filledForm);
  };

  const trainersInput = (trainers) => {
    console.log(trainers);
    let items = [];
    for (let i = 0; i < trainers; i++) {
      items.push(
        <Grid item xs={4}>
          <CusInput
            key={i}
            label={`Assistant Trainer-${i + 1}`}
            onChange={(e) => setAssTrainers([...assTrainers.push(e.target.value)])}
            // onChange={(e) => onAssTrainersChange(e.target.value)}
            value={assTrainers[i]}
          />
        </Grid>
      );
    }
    return items;
  };

  return (
    <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
      <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }}>
        FORM CONTROL
      </h2>
      <div className="Body">
        <Grid container columnSpacing={3}>
          <Grid item xs={8}>
            <CusSwitch
              Text="is Form Open"
              // label="is Form Open"
              onChange={(e) => inputChangeHandler("IsFormOpen", e.target.check)}
            />
          </Grid>
          <Grid item xs={8}>
            <CusSelect
              label="Open in Countries *"
              onChange={(e) => onCourChangeHandler("openInCountries", e.target.value)}
              value={course}
              dataSource={[
                { id: "pk", fullName: "pakistan" },
                { id: "uk", fullName: "united kingdom" },
                { id: "usa", fullName: "america" },
                { id: "cn", fullName: "canada" },
              ]}
            />
          </Grid>
          <Grid item xs={8}>
            <CusSelect
              label="Open in Cities *"
              onChange={(e) => onCourChangeHandler("openInCities", e.target.value)}
              value={course}
              dataSource={[
                { id: "khi", fullName: "karachi" },
                { id: "lhr", fullName: "lahore" },
                { id: "que", fullName: "quetta" },
                { id: "pes", fullName: "peshawar" },
              ]}
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
          <Grid item xs={8}>
            <CusAlert
              label="Age"
              placeholder={age ? age.toString() : "Age"}
              onClick={ageDisabledHandler}
              disabled={ageDisabled}
              value={!!age && age > 0 ? age : "Plz select back date for date of birth"
                // () => {setAlertTitle("Plz select back date for date of birth");
                // setOpen(true)}
              }
              open={open}
              onClose={onAlertClose}
              alertTitle="Date of Birth required only"
              alertMessage="Age will be calculated on it"
            />
          </Grid>
          {!!trainers && trainersInput(trainers)}
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                onClick={() => setTrainers(trainers + 1)}
                style={{
                  minWidth: "15%",
                  alignSelf: "start",
                  marginBlock: 20,
                  fontSize: 16,
                }}
              >
                Add Assistant Trainers
              </Button>
              <Button
                variant="contained"
                style={{
                  minWidth: "15%",
                  alignSelf: "end",
                  marginBlock: 20,
                  fontSize: 18,
                }}
              // onClick={onSubmitHandler}
              >
                SUBMIT
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
