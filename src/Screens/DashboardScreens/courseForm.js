import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../utils/components/MaterialUi/cusInput";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CusAlert from "../../utils/components/MaterialUi/cusAlert";
import CusSwitch from "../../utils/components/MaterialUi/cusSwitch";

export default function CourseForm() {
  const [filledForm, setFilledForm] = useState({});
  const [trainers, setTrainers] = useState(0);
  const [assTrainers, setAssTrainers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState("");

  const [open, setOpen] = useState(false);

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
        COURSE FORM
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
            <CusInput
              required={true}
              label="Course Name "
              placeholder="duration in month"
              onChange={(e) =>
                inputChangeHandler("Course Name", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <CusInput
              label="Course Duration"
              onChange={(e) =>
                inputChangeHandler("Course Duration", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={8}>
            <CusInput
              label="No. of Quiz"
              onChange={(e) => inputChangeHandler("NoOfQuiz", e.target.value)}
            />
          </Grid>
          <Grid item xs={8}>
            <CusInput
              label="Fee in Rupees "
              onChange={(e) =>
                inputChangeHandler("FeeInRupees", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              label="Lead Trainer ID"
              onChange={(e) =>
                inputChangeHandler("LeadTrainerID", e.target.value)
              }
            />
          </Grid>
          {!!trainers && trainersInput(trainers)}
          <Grid item xs={12}>
            <div style={{display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                onClick={() => setTrainers(trainers + 1)}
                style={{
                  minWidth: "15%",
                  alignSelf: "start",
                  marginBlock: 20,
                  fontSize: 18,
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