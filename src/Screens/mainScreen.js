import "../App.css";
import blueSpinner from "../Utils/Gif/blueSpinner.gif";
import cusColors from "../Utils/colors";
import CusHeader from "../Config/Components/cusHeader";

const cardElements = [
  {
    image: "",
    model: "",
    numberOfSeats: "",
    bookingFair: "",
    bookingStatus: "",
    ProviderName: "",
    ProviderContact: "",
  },
];
export default function MainScreen() {
  return (
    <div style={styles.mainDiv}>
      <CusHeader></CusHeader>
      <div style={styles.bodyDiv}>
        <h2>body</h2>
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    diplay: "flex",
    flexdirection: "column",
    // flex: "1",
    width: "100vw",
    height: "100vh",
    boxSizing: "border-box",
    justifyContent: "center",
    backgroundColor: cusColors.buttonColor,
  },

  bodyDiv: {
    diplay: "flex",
    flexdirection: "column",
    width: "100%",
    height: "90%",
    justifyContent: "center",
    backgroundColor: cusColors.bodyBgColor,
  },
};
