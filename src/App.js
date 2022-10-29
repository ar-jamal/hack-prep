import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Input from "./utils/components/MaterialUi/inputField";
import CusSelect from "./utils/components/MaterialUi/select";

function App() {
  const [inputValues, setInputValues] = useState({})
  const [course, setCourse] = useState('');

  // const [fieldLabel, setFieldLabel] = useState("")

  const inputChangeHandler = (key, val) => {
    inputValues[key] = val
    setInputValues({...inputValues})
    console.log(inputValues)
  }
  const onSelectChangeHandler= (val) => {
    setCourse(val)
  }

  return (
    <div className='Layout'>
      {/* <div className="Header-view"> */}
      <h2>Student Form</h2>
      {/* </div> */}
      <div className='Body'>
        <Input
          label="First Name"
          onChange={(e) => inputChangeHandler( "First Name", e.target.value)}
        />
        <Input
          label="Last Name"
          onChange={(e) => inputChangeHandler( "Last Name", e.target.value)}
        />
        <CusSelect 
        label= "Course"
        onChange= {(e) => onSelectChangeHandler(e.target.value)}
        value= {course} /* {selectChange} */
        child01= "Mobile & Web Development"
        child02= "Python"
        // child03= "Machine Learning"
        // child04= "English"
        />
        <Button 
        style= {{width: "15%", alignSelf: "center"}}
        variant= "contained" 
        >SUBMIT</Button>
      </div>
    </div>
  );
}

export default App;