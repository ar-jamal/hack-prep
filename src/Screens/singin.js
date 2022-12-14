import { Button, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Box } from "@mui/system";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinUser } from "../Config/firebaseMethods";
import AlertWithButton from "../Config/Component/cusAlert";

export default function Signin() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  let signinAuth = () => {
    signinUser({ email, password })
      .then((userData) => {
        if (userData.category === "student") {
          navigate(`/studentprofile/:${userData.firstName} ${userData.lastName}`/* , { state: success.userName } */);
        } else if(userData.category === "adm") {
          navigate(`/admin/: Main Admin`/* , { state: success.userName } */);
          
        }
      })
      .catch((error) => {
        if (error) {
          setOpen(true);
        }
      });
  };
  return (
    <>
      <div>
        <h1>Sign in</h1>
        <Box style={{ flexDirection: "column" }}>
          <TextField
            style={{ margin: 12 }}
            label="Email "
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box style={{ marginBottom: 18 }}>
          <TextField
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        {/* <Button style={{ margin: 28 }} onClick={signinAuth}> Sign in </Button> */}
        <AlertWithButton
          butTitle="Sign in"
          onClick={signinAuth}
          open={open}
          onClose={() => setOpen(false)}
          alertTitle="No user found"
          alertMessage="Kindly put the correct Email or Password "
        />
        <div style={{ flex: 1, flexDirection: "row" }}>
          <h4 style={{ margin: 6 }}>Registered user?</h4>
          <Button variant="outlined" onClick={() => navigate("/signup")}>
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
}
