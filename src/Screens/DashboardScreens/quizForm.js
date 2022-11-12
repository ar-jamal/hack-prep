import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../utils/components/MaterialUi/cusInput";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AlertDialog from "../../utils/components/MaterialUi/cusAlert";
import { sendData } from "../../Config/firebaseMethods";
// import { map } from "@firebase/util";

export default function QuizForm() {
  const [filledQues, setFilledQues] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [options, setOptions] = useState(0);
  const [question, setQuestion] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const [ansOptions, setAnsOptions] = useState([]);
  // const [copyOptions, setCopyOptions] = useState([])
  const [moreQues, setMoreQues] = useState([]);
  const [open, setOpen] = useState(false);
  const [otherInputVals, setOtherInputVals] = useState({})

  const inputChangeHandler = (key, val) => {
    // console.log(val);
    inputValues[key] = val;
    setInputValues({ ...inputValues });
    console.log(inputValues);
  };
  const onAnsInputHandler = (i, val) => {
    const copyOptions = [...ansOptions]
    copyOptions[i] = val
    setAnsOptions([...copyOptions]);
    inputValues["ansOptions"] = ansOptions
    console.log(inputValues)
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
    console.log(filledQues)
    // setFilledQues([...filledQues.push(inputValues)]);
    filledQues.push(inputValues);
    setFilledQues([...filledQues])
    console.log(filledQues);
  };

  const otherInpValsHandler = (key, val) => {

    !!otherInputVals.key === "duration"
      ? otherInputVals.key = `${val}&nbsp;minutes`
      : otherInputVals[key] = val;
  }

  const onFormSubmitHandler = () => {
    filledQues.push(otherInputVals)
    sendData(filledQues, `quizData/`)
      .then((success) => {
        setOpen(true);
      })
      .catch((err) => {
        console.log(err)
      })
  };


  return (
    <div sx={{ width: { sm: `calc(100% - 420px)` }, display: "flex", height: "100vh" }}>
      <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }}>
        QUIZ FORM
      </h2>
      {/* <div className="Body"> */}
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
            onClick={() => setOptions(options + 1)}
            style={{
              minWidth: "15%",
              alignSelf: "start",
              marginBlock: 20,
              fontSize: 18,
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
              fontSize: 18,
            }}
          >
            Add more Questions
          </Button>
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
            onChange={(e) => otherInpValsHandler("TotalMarks", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            style={{
              width: "15%",
              alignSelf: "end",
              marginBlock: 20,
              fontSize: 18,
            }}
            onClick={onFormSubmitHandler}
          >
            SUBMIT
          </Button>
        </Grid>
        {/* <Grid container spacing={4}> */}
        {!!filledQues && filledQues.length > 0
          ? filledQues.map((e, i) => (
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
                )) : null}
            </div>
          ))
          : "no question found"}
      </Grid>
      {/* </div> */}
    </div>
  );
}
