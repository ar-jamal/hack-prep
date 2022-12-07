import "../App.css";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import CusInput from "../cussssConfig/cussssComp/cusInput";
import CusDateInput from "../cussssConfig/cussssComp/cusInput";
import CusSelect from "../cussssConfig/cussssComp/cusSelect";
import CusAlert from "../cussssConfig/cussssComp/cusAlert";
import Grid from "@mui/material/Grid";
import { set } from "firebase/database";
import { sendData, signupUser } from "../cussssConfig/firebaseMethods";
import { Password } from "@mui/icons-material";
import { async } from "@firebase/util";
import CusButton from "../cussssConfig/cussssComp/cusButton";
import blueSpinner from "../Utils/Gif/blueSpinner.gif";

export default function StudentForm() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState([]);
  const [filledForm, setFilledForm] = useState({});
  const [course, setCourse] = useState("");
  const [sec, setSec] = useState("");
  const [dateValue, setDateValue] = useState(null);
  const [age, setAge] = useState("");
  const [ageDisabled, setAgeDisabled] = useState(false);
  const [count, setCount] = useState(0);
  const [fig, setFig] = useState("00");
  const [rollNo, setRollNo] = useState("");
  let myAge = 0;
  // const [alertTitle, setAlertTitle] = useState("");
  // const [alertMessage, setAlertMessage] = useState("");
  const [alertContent, setAlertContent] = useState({
    alertTitle: "",
    alertMessage: "",
    open: false,
  });
  const [nodeId, setNodeId] = useState("");

  const loaderHandler = (
    <img style={{ width: "200px", alignSelf: "center" }} src={blueSpinner} />
  );

  const isReqField =
    !!filledForm.firstName &&
    !!filledForm.contact &&
    !!filledForm.email &&
    !!filledForm.password &&
    !!filledForm.course &&
    !!filledForm.sec &&
    !!filledForm.cnic &&
    !!filledForm.fatherName &&
    !!filledForm.fatherContact &&
    !!filledForm.emergencyContact;

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
    setAlertContent({
      alertTitle: "",
      alertMessage: "",
      open: false,
    });
    // alertContent.open = false;
    setAgeDisabled(false);
  };
  const ageDisabledHandler = () => {
    setAgeDisabled(true);
    setAlertContent({
      alertTitle: "Date of Birth required only",
      alertMessage: "Age will be calculated on it",
      open: true,
    });
  };

  const onSubmitHandler = () => {
    setLoader(true);
    filledForm.age = myAge;
    console.log(isReqField);
    console.log(filledForm);
    if (!!myAge && myAge < 1) {
      setLoader(false);
      setAlertContent({
        alertTitle: "invalid age",
        alertMessage: "Plz select back date",
        open: true,
      });
      return;
    } else if (!isReqField) {
      setLoader(false);
      setAlertContent({
        alertTitle: "Required field error",
        alertMessage: "Plz must fill all required fields",
        open: true,
      });
      return;
    } else {
      filledForm.userCategory = "student";
      filledForm.rollNumber = generateStudentId();
      filledForm.registrationDate = new Date().toISOString().slice(0, 10);
      filledForm.isFeeSubmitted = false;
      filledForm.isApproved = false;
      filledForm.isActive = false;
      formData.push(filledForm);
      console.log(formData);
      signupUser(filledForm)
      // sendData(formData, "Student", nodeId)
        .then((success) => {
          console.log(success);
          setLoader(false);
          setAlertContent({
            alertTitle: "Successfull!",
            alertMessage: success.message,
            open: true,
          });
          // setNodeId(success.nodeId)
          console.log(success.obj);
        })
        .then((err) => {
          setLoader(false);
          // alertContent.alertMessage = err;
          console.log(err);
          setAlertContent({
            alertTitle: "error",
            alertMessage: err,
            open: true,
          });
        });
    }
  };
  const ageUpdateHandler = () => {
    if (!!myAge && myAge < 12) {
      // setAlertContent({
      //   alertTitle: "Incorrect Date",
      //   alertMessage: "Plz select back date in Date of birth field",
      //   open: true
      // })
      console.log("nothing");
    }
  };
  if (age) {
    const miliSec = Date.now() - new Date(age).getTime();
    console.log(miliSec);
    myAge = Math.floor(miliSec / 31536000000);
    ageUpdateHandler();
  }
  return loader ? (
    loaderHandler
  ) : (
    <div className="Layout">
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
              open={alertContent.open}
              onClose={onAlertClose}
              alertTitle={alertContent.alertTitle ?? "no title"}
              alertMessage={alertContent.alertMessage ?? "no message"}
            />
          </Grid>
        </Grid>
        <CusButton loader={loader} onClick={onSubmitHandler} />
      </div>
    </div>
  );
}
