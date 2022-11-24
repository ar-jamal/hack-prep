import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./CONFIG/router";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: '100%', height: "100%" }} /* className="Layout" */>
      <AppRouter />
    </div>
  );
}

export default App;
