import * as React from "react"
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../cussssConfig/firebaseMethods";
import RadioGroupForm from "../cussssConfig/Components/cusRadio";

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [category, setCategory] = useState("")
    const [signupErr, setSignupErr] = useState("")

    const [value, setValue] = useState("std");

    const onRadioChangeHandler = (event) => {
        setValue(event.target.value);

      };

    const signupAuth = () => {
        signupUser({ email, password, userName, category })
            .then((success) => {
                // console.log(success)
                if (success) {
                    console.log(userName)
                    navigate(`/${userName.split(" ")}`, /* {state: userName} */)
                }
            })
            .catch((error) => {
                setSignupErr(error);
            });
    }
    return (
        <div style= {{marginLeft: "3vw"}}>
            <h1>Sign up</h1>
            <RadioGroupForm
                value={value}
                onChange={onRadioChangeHandler}
                dataSource= {[
                    {
                        label: "student",
                        value: "std"
                    },
                    {
                        label: "admin",
                        value: "adm"
                    },
                    {
                        label: "admin staff",
                        value: "adms"
                    },
                ]}
            />

            <Box style={{ flexDirection: "column" }} >
                <TextField
                    style={{ margin: 12 }}
                    label='User Name'
                    variant="standard"
                    onChange={(e) => setUserName(e.target.value)}
                />
            </Box>
            <Box style={{ flexDirection: "column" }} >
                <TextField
                    style={{ margin: 12 }}
                    label='Email '
                    variant="standard"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Box>
            <Box>
                <TextField
                    label='Password'
                    variant="standard"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Box>
            <Button variant="outlined" style={{ margin: 28 }} onClick={signupAuth}>Sign up</Button>
            <Box style={{ flex: 1, flexDirection: "row" }}>
                <h4 style={{ margin: 6 }}>Already have an account?</h4>
                <Button variant="outlined" onClick={() => navigate("/")}>Sign in</Button>
            </Box>
        </div>
    )
}
