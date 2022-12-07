import "../../App.css";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../cussssConfig/Components/cusInput";
import CusSelect from "../../cussssConfig/Components/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CusAlert from "../../cussssConfig/Components/cusAlert";
import CusSwitch from "../../cussssConfig/Components/cusSwitch";
import { sendData } from "../../cussssConfig/firebaseMethods";
import CusButton from "../../cussssConfig/Components/cusButton";


export default function TrainerForm() {
  const [filledForm, setFilledForm] = useState({});
  const [qualifications, setQualifications] = useState(0);
  const [otherQualifications, setOtherQualifications] = useState([]);
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
    console.log(filledForm.isFormOpen);
  };

  const qualificationsHandler = (qualifications) => {
    console.log(qualifications);
    let items = [];
    for (let i = 0; i < qualifications; i++) {
      items.push(
        <Grid item xs={4}>
          <CusInput
            key={i}
            label={`Assistant Trainer-${i + 1}`}
            onChange={(e) => setOtherQualifications([...otherQualifications.push(e.target.value)])}
            // onChange={(e) => onotherQualificationsChange(e.target.value)}
            value={otherQualifications[i]}
          />
        </Grid>
      );
    }
    return items;
  };
  

  const onSubmitHandler = () => {
    console.log(filledForm)
    if (otherQualifications && otherQualifications > 0) {
      filledForm.otherQualifications = otherQualifications
    }
    filledForm.userCategory = "admin"
    // sendData(filledForm, "admin") 
  }

  return (
    <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
      <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }}>
        TRAINER FORM
      </h2>
      <div className="Body">
        <Grid container columnSpacing={3}>
          <Grid item xs={12}>
            <CusInput
              label="First Name"
              onChange={(e) =>
                inputChangeHandler("firstName", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              label="Last Name"
              onChange={(e) => inputChangeHandler("lastName", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              label="CNIC"
              onChange={(e) =>
                inputChangeHandler("cnic", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              label="Qualification"
              onChange={(e) =>
                inputChangeHandler("qualification", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusButton
              variant="outlined"
              title="Add Qualifications"
              fontSize="14px"
              marginBlock="24px"
              onClick={() => setQualifications(qualifications + 1)}
            />
          </Grid>
          {!!qualifications && qualificationsHandler(qualifications)}
          <Grid item xs={12}>
            <CusSelect
              label="Courses Allowed *"
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
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <CusButton
                minWidth="23%"
                variant="contained"
                onClick={onSubmitHandler}
                marginBlock="16px"
                padding="5px"
              // alignSelf="flex-end"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div >
  );
}
