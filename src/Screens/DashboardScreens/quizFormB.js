import { Box, Grid, Typography, Button } from "@mui/material";
import { useState } from "react";
import CusInput from "../../CONFIG/COMPONENTS/CUsINput";
import CusSelect from "../../CONFIG/COMPONENTS/CUsSElect";
import Checkbox from "@mui/material/Checkbox";

function QuizFormB() {
    const [isCreateQuiz, setIsCreateQuiz] = useState(false);
    const [optionsArr, setOptionsArr] = useState(["Option 1"]);
    const [questions, setQuestions] = useState([]);
    const [model, setModel] = useState({});
    const [question, setQuestion] = useState({});
    const [option, setOption] = useState("");

    let arr = [
        {
            id: 1,
            display: "abc",
        },
        {
            id: 2,
            display: "abc",
        },
        {
            id: 3,
            display: "abc",
        },
    ];

    let createQuiz = () => {
        setIsCreateQuiz(true);
    };
    let fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
    };
    let addOption = () => {
        setOptionsArr([...optionsArr, option]);
    };

    return (
        <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
            <Typography variant="h4">Quiz</Typography>
            <div className="Body">
                <Grid container>
                    <Grid md={6} item>
                            <CusInput
                                onChange={(e) => fillModel("question", e.target.value)}
                                disabled={isCreateQuiz}
                                label="Quiz Name"
                            />
                    </Grid>
                    <Grid md={3} item>
                            <CusInput
                                onChange={(e) => fillModel("duration", e.target.value)}
                                disabled={isCreateQuiz}
                                label="Quiz Duration"
                            />
                    </Grid>
                    <Grid md={3} item>
                            <CusSelect
                                onChange={(e) => fillModel("course", e.target.value)}
                                disabled={isCreateQuiz}
                                datasource={[
                                    {
                                        id: "wm",
                                        fullName: "Web And Mobile",
                                    },
                                ]}
                            />
                    </Grid>
                    <Grid md={12} item>
                        <Box>
                            <Button onClick={createQuiz} label="Create Quiz" />
                        </Box>
                    </Grid>
                </Grid>
                {/* {isCreateQuiz && (
                        <Grid container>
                            <Grid md={12} item>
                                <CusInput
                                    onChange={(e) => {
                                        setQuestion({ ...question, question: e.target.value });
                                    }}
                                    label="Question"
                                />
                            </Grid>
                            <Grid md={12} item>
                                {optionsArr.map((x, i) => (
                                    <>
                                        <Checkbox
                                            onChange={(e) => (x.isChecked = e.target.value)}
                                        />{" "}
                                        <Typography key={i}>{x}</Typography>
                                    </>
                                ))}
                            </Grid>
                            <Grid md={8} item>
                                <CusInput
                                    onChange={(e) => setOption(e.target.value)}
                                    label="Option"
                                />
                            </Grid>

                            <Grid md={4} item>
                                <Button onClick={addOption} label="add" />
                            </Grid>
                            <Grid md={12} item>
                                <Button label="Submit Question" />
                                <Button label="Lock Quiz" />
                            </Grid>
                        </Grid>
                    )} */}
            </div>
        </div>
    );
}
export default QuizFormB;
