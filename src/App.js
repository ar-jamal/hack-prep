import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Config/router";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";


function App() {
  
  return (
    <div  style= {{display: "flex", flexDirection: "column", width: '100%', height: "100%"}} /* className="Layout" */>
      <Provider store= {store}>
      <AppRouter/>
      </Provider>
    </div>
  );
}

export default App;
