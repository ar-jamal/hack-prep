import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CusSelect from "../Config/Components/cusSelect";
import CusAlert from "../Config/Components/cusAlert";
import CusSwitch from "../Config/Components/cusSwitch";
import { getData, sendData } from "../Config/firebaseMethods";
import CusTable from "../cusTable";
import CusInput from "../Config/Components/cusInput";

function ResultScreen() {
  const [filledForm, setFilledForm] = useState({});
  const [sec, setSec] = useState("")
  const [courseStatus, setCourseStatus] = useState(false)
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [rollNumber, setRollNumber] = useState("")

  const [resultData, setResultData] = useState([
    {
      name: "JAMAL KARIM",
      rollNum: `JAM001`,
      marks: 60,
      result: "Pass",
    },
    {
      name: "SALMAN KARIM",
      rollNum: `SAM002`,
      marks: 65,
      result: "Pass",
    },
    {
      name: "SIKANDER KARIM",
      rollNum: "SIK003",
      marks: 75,
      result: "Pass",
    },
    {
      name: "QAISAR KARIM",
      rollNum: "QAIS004",
      marks: 85,
      result: "Pass",
    },
    {
      name: "SHEHROZ KARIM",
      rollNum: "SHE005",
      marks: 60,
      result: "Pass",
    },
    {
      name: "FAISAL KARIM",
      rollNum: "FAIS006",
      marks: 55,
      result: "Pass",
    },
    {
      name: "BABAR ALI",
      rollNum: "BAB007",
      marks: 45,
      result: "Pass",
    },
    {
      name: "ASIF ALI",
      rollNum: "ASF008",
      marks: 80,
      result: "Pass",
    },
  ]);

  const onSecChangeHandler = (key, val) => {
    setSec(val);
    filledForm[key] = val;
    setFilledForm({ ...filledForm });
  };

  const onSubmitHandler = () => {
    setLoader(true);
    filledForm.isShowResult = courseStatus;
    filledForm.result = resultData;
    console.log(filledForm);
    sendData(filledForm, "results")
      .then((res) => {
        setLoader(false);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  const getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <div sx={{ width: { sm: `calc(100% - 420px)` } }}>
      <h1 style={{ textAlign: "center", marginBottom: "10%" }}>
        Create Result
      </h1>
      <Box sx={{ paddingInline: 20 }}>
        <Grid spacing={4} container>
          <Grid md={12} item>
            <CusSelect
              label="Course"
              onChange={(e) =>
                setFilledForm({ ...filledForm, course: e.target.value })
              }
              dataSource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile Development",
                },
                {
                  id: "py",
                  fullName: "Python",
                },
                {
                  id: "ml",
                  fullName: "Machine Learning",
                },
                {
                  id: "en",
                  fullName: "English Language",
                },
              ]}
            />
          </Grid>
          <Grid item xs={4}>
            <CusSelect
              label="Sec *"
              onChange={(e) => onSecChangeHandler("sec", e.target.value)}
              value={sec}
              dataSource={[
                {
                  id: "a",
                  fullName: "A",
                },
                {
                  id: "b",
                  fullName: "B",
                },
                {
                  id: "c",
                  fullName: "C",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <CusInput
              label="CNIC *"
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <CusInput
              label="Roll number *"
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <CusTable />
            </Box>
          </Grid>
          <Grid md={6} item>
            <Button loading={loader} label="Submit" onClick={onSubmitHandler} />
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <CusSelect
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    dataSource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />{" "}
                </td>
                <td>
                  <CusSwitch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </div>
  );
}
export default ResultScreen;
