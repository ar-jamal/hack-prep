import "../App.css";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import CusInput from "../Config/components/MaterialUi/cusInput";
import CusDateInput from "../Config/components/MaterialUi/cusInput";
import CusSelect from "../Config/components/MaterialUi/cusSelect";
import CusAlert from "../Config/components/MaterialUi/cusAlert";
import Grid from "@mui/material/Grid";
import { set } from "firebase/database";
import { sendData } from "../Config/firebaseMethods";
import { Password } from "@mui/icons-material";
import { async } from "@firebase/util";
import CusButton from "../Config/components/cusButton";
import blueSpinner from "../Utils/Gif/blueSpinner.gif"

export default function StudentForm() {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState([]);
  const [filledForm, setFilledForm] = useState({});
  const [course, setCourse] = useState("");
  const [sec, setSec] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [age, setAge] = useState("");
  const [ageDisabled, setAgeDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [fig, setFig] = useState("00");
  const [rollNo, setRollNo] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [nodeId, setNodeId] = useState("");

  const loaderHandler = 
    <img
      style={{ width: "200px", alignSelf: "center" }}
      src={blueSpinner} />

  const isReqField =
    (filledForm.firstName) &&
    (filledForm.constact) &&
    (filledForm.email) &&
    (filledForm.password) &&
    (filledForm.course) &&
    (filledForm.sec) &&
    (filledForm.cnic) &&
    (filledForm.fatherName) &&
    (filledForm.fatherContact) &&
    (filledForm.emergencyContact)

  const countHandler = () => {
    setCount((formData.length + 1).toString());
    if (count.length > 1) {
      setFig("0");
    } else if (count.length > 2) {
      setFig("");
    }
    // console.log(count);
    let figCount = fig.concat(count);
    return figCount;
  };

  const generateStudentId = () => {
    const figCount = countHandler();
    const stuNamePart = filledForm.firstName?.slice(0, 3) ?? "";
    const fathNamePart = filledForm.fatherName?.slice(0, 3) ?? "";
    const cnicPart = filledForm.cnic?.slice(-3) ?? "";

    return (
      stuNamePart +
      fathNamePart +
      filledForm.course +
      filledForm.sec.toUpperCase() +
      cnicPart +
      figCount
    );
  };

  const inputChangeHandler = (key, val) => {
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
  };
  async function dateChangeHandler(key, val) {

    setAge(val);
    console.log(age);
  }
  const ageUpdated = () => {
    if (!!age && age < 1) {
      setAlertTitle("incorrect date");
      setAlertMessage("Plz select back date in Date of birth field");
      setOpen(true);
      return;
    } else {
      filledForm["age"] = age;
      setFilledForm({ ...filledForm });
      console.log(filledForm.age);
    }
  };
  useEffect(() => {
    ageUpdated();
  }, [age]);

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
    setAgeDisabled(false);
    // setAlertTitle("");
    // setAlertMessage("");
  };
  const ageDisabledHandler = () => {
    setAgeDisabled(true);
    setAlertTitle("Date of Birth required only");
    setAlertMessage("Age will be calculated on it");
    setOpen(true);
  };

  const onSubmitHandler = () => {
    setLoader(true)
    console.log(isReqField);
    // console.log(filledForm);
    if (!!age && age < 1) {
      setOpen(true);
      return;
    } else if (!isReqField) {
      setAlertTitle("Required field error");
      setAlertMessage("Plz must fill all req fields");
      setOpen(!!alertTitle && alertMessage ? true : false);
      return;
    } else {
      filledForm.rollNumber = generateStudentId();
      filledForm.registrationDate = new Date().toISOString().slice(0, 10);
      filledForm.isFeeSubmitted = false;
      filledForm.isApproved = false;
      filledForm.isActive = false;
      formData.push(filledForm);
      console.log(formData);
      sendData(formData, "Student", nodeId)
      .then((success) => {
          console.log(success)
          setAlertTitle(success.message);
          setAlertMessage("");
          setLoader(false)
          setOpen(true);
          // setNodeId(success.nodeId)
          console.log(success.obj);
        })
        .then((err) => {
          setAlertMessage("error message");
          setAlertTitle("")
          setLoader(false)
          setOpen(true)
        });
    }
  };

  let myAge = 0 
  if(age ){
    // const dateString = age.toString();
    // const formattedDate = new Date(dateString).toString().slice(4, 15);
    
    const miliSec = Date.now() - new Date(age).getTime();
    console.log(miliSec)
    myAge = Math.floor(miliSec / (1000 * 60 * 60 * 24 * 365));
  }
  return ( loader? loaderHandler 
    : <div className="Layout">
      <h2 style={{ marginBlock: "4%", fontSize: 28 }}>REGISTRATION FORM</h2>
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
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Email"
              onChange={(e) => inputChangeHandler("email", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Password"
              type="Password"
              onChange={(e) => inputChangeHandler("password", e.target.value)}
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
              onChange={(e) => inputChangeHandler("cnic", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Father Name"
              onChange={(e) => inputChangeHandler("fatherName", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              label="Father CNIC"
              onChange={(e) => inputChangeHandler("fatherCNIC", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <CusInput
              required={true}
              label="Father Contact"
              onChange={(e) =>
                inputChangeHandler("fatherContact", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              required={true}
              label="Emergency Contact"
              onChange={(e) =>
                inputChangeHandler("emergencyContact", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={4}>
            <CusDateInput
              id="date"
              label="Date of Birth"
              type="date"
              value={age}
              // defaultValue={new Date().toISOSting()}
              onChange={(e) => dateChangeHandler("date", e.target.value)}
              shrink={true}
              marginTop={0}
            />
          </Grid>
          <Grid item xs={8}>
            <CusAlert
              label="Age"
              placeholder={myAge ? myAge.toString() : "Age"}
              onClick={ageDisabledHandler}
              disabled={ageDisabled}
              value={myAge}
              open={open}
              onClose={onAlertClose}
              alertTitle={alertTitle ? alertTitle : ""}
              alertMessage={alertMessage ? alertMessage : ""}
            />
          </Grid>
        </Grid>
        <CusButton
          loader={loader}
          onClick={onSubmitHandler} />
      </div>
    </div>
  );
}
