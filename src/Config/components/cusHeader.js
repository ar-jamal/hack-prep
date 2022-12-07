import CusButton from "./cusButton";
import { useNavigate } from "react-router-dom";
import cusColors from "../../utils/colors";
import { Stack } from "@mui/material";
import {logout} from "../firebaseMethods"

function CusHeader(props) {
  // {onClick, children}= props
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
  }

  return (
    <Stack style={styles.headerDiv} direction="row" spacing={3}>
      <CusButton
        color= {cusColors.bodyBgColor}
        title="Home"
        onClick={() => navigate("/")}
      />
      <CusButton
        color= {cusColors.bodyBgColor}
        title="Sign in"
        onClick={() => navigate("/Signin")}
      />
      <CusButton
        color= {cusColors.bodyBgColor}
        title="Register"
        onClick={() => navigate("/signup")}
      />
      <CusButton
        color= {cusColors.bodyBgColor}
        // backgroundColor= {cusColors.buttonColor }
        title="logout"
        onClick={() => logoutHandler()}
      />
    </Stack>
  );
}
export default CusHeader;

const styles = {
  headerDiv: {
    backgroundColor: cusColors.headerBgColor,
    diplay: "flex",
    boxSizing: "border-box",
    width: "100%",
    height: "10%",
    paddingInline: "3%",
    justifyContent: "flex-end",
  },
};
