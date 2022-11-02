import "../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Input from "../utils/components/MaterialUi/inputField";
import CusSelect from "../utils/components/MaterialUi/select";
import DatePicker from "../utils/components/MaterialUi/dateObj";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import AlertDialog from "../utils/components/MaterialUi/AlertDialog";

export default function StudentForm() {
    const [inputValues, setInputValues] = useState({});
    const [course, setCourse] = useState("");
    const [sec, setSec] = useState("");
    const [dateValue, setDateValue] = useState(null);
    const [age, setAge] = useState("")
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
        console.log(miliSec)
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
                            label="First Name"
                            onChange={(e) => inputChangeHandler("First Name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            label="Last Name"
                            onChange={(e) => inputChangeHandler("Last Name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Input
                            required={true}
                            label="Contact"
                            onChange={(e) => inputChangeHandler("Contact", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CusSelect
                            label="Course *"
                            onChange={(e) => onCourChangeHandler("Course", e.target.value)}
                            value={course}
                            child01="Mobile & Web Development"
                            child02="Python"
                            child03="Machine Learning"
                            child04="English Language"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CusSelect
                            label="Sec *"
                            onChange={(e) => onSecChangeHandler("Sec", e.target.value)}
                            value={sec}
                            child01="Sec A"
                            child02="Sec B"
                            child03="Sec C"
                        // child={["Sec A", "Sec B", "Sec C"]}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            required={true}
                            label="CNIC"
                            onChange={(e) => inputChangeHandler("CNIC", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            required={true}
                            label="Father Name"
                            onChange={(e) => inputChangeHandler("Father Name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Father CNIC"
                            onChange={(e) => inputChangeHandler("Father CNIC", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            required={true}
                            label="Father Contact"
                            onChange={(e) =>
                                inputChangeHandler("Father Contact", e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            required={true}
                            label="Emergency Contact"
                            onChange={(e) =>
                                inputChangeHandler("Emergency Contact", e.target.value)
                            }
                        />
                    </Grid>
                    <Grid item
                        style={{ marginBlock: 20 }}
                        xs={4}>
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
                        <AlertDialog
                            label="Age"
                            placeholder={!age ? "Age" : null}
                            onClick={ageDisabledHandler}
                            disabled={agedisabled}
                            value={age >= 0 ? age : "Plz select back date for date of birth"}
                            //AlerProps
                            open={open}
                            onClose={onAlertClose}
                        />
                        {/* <Input
              label="Age"
              placeholder={!age ? "Age" : null}
              onClick={ageDisabledHandler}
              disabled={agedisabled}
              value={age}
            /> */}
                    </Grid>
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
        </div>
    );
}