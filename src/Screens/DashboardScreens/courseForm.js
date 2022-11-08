import "../../App.css";
import { useState } from "react";
import { Button, Typography } from "@mui/material";
import CusInput from "../../utils/components/MaterialUi/cusInput";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CusAlert from "../../utils/components/MaterialUi/cusAlert";

export default function CourseForm() {
    const [filledForm, setFilledForm] = useState({});
    const [AssTrainers, setAssTrainers] = useState([]);
    const [IsFormOpen, setIsFormOpen] = useState("");

    const [open, setOpen] = useState(false)

    const inputChangeHandler = (key, val) => {
        console.log(val)
        filledForm[key] = val;
        setFilledForm({ ...filledForm });
        console.log(filledForm);
    };

    const onFormConfHandler = (key, val) => {
        setIsFormOpen(val)
        filledForm[key] = val
        setFilledForm({ ...filledForm })
        console.log(filledForm)
    };

    return (
        <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
            <h2 style={{ marginBlock: "4%", fontSize: 28, textAlign: "center" }} >COURSE FORM</h2>
            <div className="Body">
                <Grid
                    container
                    columnSpacing={3}
                >
                    <Grid item xs={8}>
                        <CusInput
                            required={true}
                            label="Course Name "
                            placeholder="duration in month"
                            onChange={(e) => inputChangeHandler("Course Name", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <CusInput
                            label="Course Duration"
                            onChange={(e) => inputChangeHandler("Course Duration", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CusSelect
                            label="Is form Open *"
                            onChange={(e) => onFormConfHandler("IsFormOpen", e.target.value)}
                            value={IsFormOpen}
                            child01="Yes"
                            child02="No"
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
                            onChange={(e) => inputChangeHandler("FeeInRupees", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CusInput
                            label="Lead Trainer ID"
                            onChange={(e) => inputChangeHandler("LeadTrainerID", e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CusInput
                            label="Assistant Trainers"
                            onChange={(e) =>
                                inputChangeHandler("AssTrainers", setAssTrainers([...AssTrainers, e]))
                            }
                        />
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
        </div >
    );
}