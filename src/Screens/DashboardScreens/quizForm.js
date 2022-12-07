import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../Config/Components/cusInput";
import CusSelect from "../../Config/Components/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AlertDialog from "../../Config/Components/CUsALert";
import { sendData } from "../../Config/firebaseMethods";
import CusAlert from "../../Config/Components/CUsALert";
// import { map } from "@firebase/util";

export default function QuizForm() {
  const [course, setCourse] = useState("");
  const [filledQues, setFilledQues] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [options, setOptions] = useState(0);
  const [question, setQuestion] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [ansOptions, setAnsOptions] = useState([]);
  // const [copyOptions, setCopyOptions] = useState([])
  const [moreQues, setMoreQues] = useState([]);
  const [open, setOpen] = useState(false);
  const [otherInputVals, setOtherInputVals] = useState({});
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const onCourChangeHandler = (key, val) => {
    setCourse(val);
    otherInputVals[key] = val;
    // setFilledForm({ ...filledForm });
  };
  const inputChangeHandler = (key, val) => {
    // console.log(val);
    inputValues[key] = val;
    setInputValues({ ...inputValues });
    console.log(inputValues);
  };
  async function onAnsInputHandler (i, val) {
   const copyOptions = [...ansOptions];
    copyOptions[i] = val;
    setAnsOptions([...copyOptions]);
    // inputValues["ansOptions"] = ansOptions;
    console.log(inputValues);
  };

  const optionsInput = (options) => {
    // console.log(options);
    let items = [];
    for (let i = 0; i < options; i++) {
      items.push(
        <Grid key={i} item xs={4}>
          <CusInput
            // key={i}
            label={`Option-${i + 1}`}
            onChange={(e) => onAnsInputHandler(i, e.target.value)}
            value={ansOptions[i]}
          />
        </Grid>
      );
    }
    return items;
  };

  const addQuestion = () => {
    console.log(filledQues);
    inputValues["ansOptions"] = ansOptions;
    // setFilledQues([...filledQues.push(inputValues)]);
    filledQues.push(inputValues);
    setFilledQues([...filledQues]);
    console.log(filledQues);
  };

  const otherInpValsHandler = (key, val) => {
    !!otherInputVals.key === "duration"
      ? (otherInputVals.key = `${val}&nbsp;minutes`)
      : (otherInputVals[key] = val);
  };

  const onFormSubmitHandler = () => {
    filledQues.push(otherInputVals);
    console.log(filledQues);
    sendData(filledQues, `quizData/`)
      .then((success) => {
        console.log(success);
        setOpen(true);
        setAlertTitle(success);
        setAlertMessage("");
      })
      .catch((err) => {
        console.log(err);
        setAlertTitle(err);
        setAlertMessage("");
      });
  };

  return (
    <div
      sx={{
        width: { sm: `calc(100% - 420px)` },
        display: "flex",
        height: "100vh",
        // padding: "200px"
      }}
    >
      <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }}>
        QUIZ FORM
      </h2>
      <div className="Body">
        <Grid container columnSpacing={3}>
        
          <Grid item xs={8}>
            <CusInput
              required={true}
              label="Question"
              // placeholder= "create questions"
              onChange={(e) => inputChangeHandler("Question", e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <CusInput
              label="Correct Answer *"
              onChange={(e) =>
                inputChangeHandler("CorrectAnswer", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: "30" }}>
            <Button
              // size="large"
              variant="outlined"
              onClick={() => setOptions(options + 1)}
              style={{
                minWidth: "15%",
                alignSelf: "start",
                marginBlock: 20,
                fontSize: 14,
              }}
            >
              Add Ans Options
            </Button>
          </Grid>
          {!!options && optionsInput(options)}
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={addQuestion}
              style={{
                minWidth: "15%",
                alignSelf: "start",
                marginBlock: 20,
                fontSize: 16,
              }}
            >
              Add more Questions
            </Button>
          </Grid>
          <Grid item xs={12}>
            <CusSelect
              label="Courses *"
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
            <CusInput
              label="Duration *"
              onChange={(e) => otherInpValsHandler("Duration", e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <CusInput
              label="Total Marks"
              onChange={(e) =>
                otherInpValsHandler("TotalMarks", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={12}>
            <CusAlert
              butTitle="SUBMIT"
              onClick={onFormSubmitHandler}
              open={open}
              onClose={() => setOpen(false)}
              alertTitle={alertTitle}
              alertMessage={alertMessage}
            />
          </Grid>
          {/* <Grid container spacing={4}> */}
          {!!filledQues && filledQues.length > 0 ? (
            filledQues.map((e, i) => (
              <div>
                <Grid item xs={12}>
                  <Typography>{filledQues[i].question}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography>{filledQues[i].correctAns}</Typography>
                </Grid>
                {e.ansOptions && e.ansOptions > 0
                  ? e.ansOptions.map((x, j) => (
                      <Grid item xs={4}>
                        <Typography>{filledQues[i].ansOptions[j]}</Typography>
                      </Grid>
                    ))
                  : null}
              </div>
            ))
          ) : ( null 
          )}
            {/* <Typography
            sx={{ alignSelf: "center", marginInline: "43%", marginBlock: "5%" }}
            >
              no question found
            </Typography> */}
        </Grid>
      </div>
    </div>
  );
}
