import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../Config/Component/cusInput";
import CusSelect from "../../Config/Component/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CusAlert from "../../Config/Component/cusAlert";
import CusSwitch from "../../Config/Component/cusSwitch";
import { sendData } from "../../Config/firebaseMethods";
import { drawerWidth } from "./adminPanel";

export default function FormControl() {
  const [formData, setFormData] = useState([])
  const [filledForm, setFilledForm] = useState({});
  const [isFormOpen, setIsFormOpen] = useState("");
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("")
  const [nodeId, setNodeId] = useState("")
  const [alertTitle, setAlertTitle] = useState("")
  const [alertMessage, setAlertMessage] = useState("")

  const dateChangeHandler = (key, val) => {
    const dateString = val.toString();
    filledForm["date"] = val;
    setFilledForm({ ...filledForm });
  };

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
  
  

  async function onSubmitHandler() {
    // console.log(formData.length)
    filledForm.registrationDate = new Date().toISOString().slice(0, 10)
    filledForm.isFeeSubmitted = false
    filledForm.isApproved = false
    filledForm.isActive = false
    formData.push(filledForm)
    console.log(formData)
    sendData(formData, "Student", nodeId)
      .then((success) => {
        setAlertTitle(success.message);
        setAlertMessage("")
        setOpen(true)
        // setNodeId(success.nodeId)
        // console.log(success.obj)
      })
      .then((err) => {
        setAlertTitle(err)
      })
  }

  return (
    <div style={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      // backgroundColor: "yellowgreen"
    }}>
      <h2 style={{ marginBlock: "4%", fontSize: 28, /* textAlign: "center" */ }}>
        FORM CONTROL
      </h2>
      <div className="Body">
        <Grid container columnSpacing={3} xs={12} /* sx= {{backgroundColor: "yellow"}} */>
          <Grid item xs={8}>
            <CusSwitch
              label="is Form Open"
              onChange={(e) => inputChangeHandler("IsFormOpen", e.target.check)}
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12} >
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "100%",
            }}>
              <Grid item xs={12}>
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
              <Button
                variant="contained"
                sx={{
                  Width: "8%",
                  height: "65%",
                  fontSize: 22,
                }}
                onClick={onSubmitHandler}
              >
                +
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} >
            <div style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "100%",
            }}>
              <Grid item xs={12} >
                <CusSelect
                  label="Open in Cities *"
                  style={{ display: "flex", width: "100%", }}
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
              <Button
                variant="contained"
                sx={{
                  Width: "8%",
                  height: "65%",
                  fontSize: 22,
                }}
                onClick={onSubmitHandler}
              >
                +
              </Button>
            </div>
          </Grid>
          <Grid item style={{ marginBlock: 20 }} xs={6}>
            <TextField
              id="date"
              label="Date of Admission starting"
              type="date"
              defaultValue={new Date()}
              onChange={(e) => dateChangeHandler("startingDate", e.target.value)}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item style={{ marginBlock: 20 }} xs={6}>
            <TextField
              id="date"
              label="Date of Admission end *"
              type="date"
              defaultValue={new Date()}
              onChange={(e) => dateChangeHandler("endDate", e.target.value)}
              sx={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                style={{
                  minWidth: "15%",
                  marginBlock: 20,
                  fontSize: 18,
                }}
                onClick={onSubmitHandler}
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
