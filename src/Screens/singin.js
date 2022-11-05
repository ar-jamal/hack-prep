import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../Config/firebaseMethods";
import SigninBut from "../utils/components/MaterialUi/AlertDialog";

export default function Signin() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleClose = () => {
        setOpen(false);
    };

    let signinAuth = () => {
        signinUser({ email, password })
            .then((success) => {
                if (!!success) {
                    console.log(success)
                    navigate("/", { state: success.userName })
                }
            })
            .catch((error) => {
                if (!!error) {
                    setOpen(true)
                }
            });
    }
    return (
        <>
            <div>
                <h1>Sign in</h1>
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
                {/* <Button style={{ margin: 28 }} onClick={signinAuth}> Sign in </Button> */}
                <SigninBut
                    onClick={signinAuth}
                    open={open}
                    onClose={handleClose}
                    dialogTitle="No user found"
                    dialogMessage="Kindly put the correct Email or Password "
                />
                <Box style={{ flex: 1, flexDirection: "row" }}>
                    <h4 style={{ margin: 6 }}>Registered user?</h4>
                    <Button variant="outlined" onClick={() => navigate("/signup")}>Sign up</Button>
                </Box>
            </div>
        </>
    )
}