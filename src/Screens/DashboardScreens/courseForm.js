import "../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Input from "../utils/components/MaterialUi/inputField";
import CusSelect from "../utils/components/MaterialUi/select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AlertDialog from "../utils/components/MaterialUi/AlertDialog";

export default function CourseForm() {
    const [inputValues, setInputValues] = useState({});
    const [AssTrainers, setAssTrainers] = useState([]);
    const [agedisabled, setAgedisabled] = useState(false)
    const [open, setOpen] = useState(false)

    const inputChangeHandler = (key, val) => {
        console.log(val)
        inputValues[key] = val;
        setInputValues({ ...inputValues });
        console.log(inputValues);
    };
    const dateChangeHandler = (key, val) => {
        console.log(val)
        const dateString = val.toString()
        const formattedDate = new Date(dateString).toString().slice(4, 15)
        const curDate = new Date().toDateString().slice(4, 15)
        const miliSec = Date.parse(curDate) - Date.parse(`${formattedDate}`);
        const year = Math.floor(miliSec / (1000 * 60 * 60 * 24 * 365)) || ""
        setAge(year)
        console.log(age)
        // console.log(new Date())
        inputValues["date"] = val;
        setInputValues({ ...inputValues });
        // console.log(val)M /]yhj.vb
    };
    const onCourChangeHandler = (key, val) => {
        setCourse(val)
        inputValues[key] = val
        setInputValues({ ...inputValues })
        console.log(inputValues)
    };
    const onSecChangeHandler = (key, val) => {
        setSec(val);
        inputValues[key] = val
        setInputValues({ ...inputValues })
        console.log(inputValues)
    };
    const onAlertClose = () => {
        setOpen(false)
        setAgedisabled(false)
    }
    const ageDisabledHandler = () => {
        console.log('onClick working')
        setAgedisabled(true);
        setOpen(true);
        // return <AlertDialog open={open} onClose={onAlertClose} />
    }

    return (
        <div className="Layout">
            <h2 style={{ marginBlock: "4%", fontSize: 28 }} >STUDENT FORM</h2>
            <div className="Body">
                <Grid
                    container
                    columnSpacing={3} /* columns={12} */
                >
                    <Grid item xs={4}>
                        <Input
                            required={true}
                            label="Course Name *"
                            onChange={(e) => inputChangeHandler("Course Name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            label="Course Duration"
                            onChange={(e) => inputChangeHandler("Course Duration", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CusSelect
                            label="Is form Open *"
                            onChange={(e) => onCourChangeHandler("IsFormOpen", e.target.value)}
                            value={IsFormOpen}
                            child01="Yes"
                            child02="No"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            label="No. of Quiz"
                            onChange={(e) => inputChangeHandler("NoOfQuiz", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Fee in Rupees "
                            onChange={(e) => inputChangeHandler("FeeInRupees", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Lead Trainer ID"
                            onChange={(e) => inputChangeHandler("LeadTrainerID", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Assistant Trainers"
                            onChange={(e) =>
                                inputChangeHandler("AssTrainers", AssTrainers.push[e.target.value])
                            }
                        />
                    </Grid>
                    {/* <Input
              label="Age"
              placeholder={!age ? "Age" : null}
              onClick={ageDisabledHandler}
              disabled={agedisabled}
              value={age}
            /> */}
            </Grid>
            <Button
                variant="contained"
                style={{
                    width: "15%",
                    alignSelf: "end",
                    marginBlock: 20,
                    fontSize: 18
                }}
            // onClick={onSubmitHandler}
            >
                SUBMIT
            </Button>
        </div>
        </div >
    );
}