import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import CusAlert from "../../utils/components/MaterialUi/cusAlert";
import CusSwitch from "../../utils/components/MaterialUi/cusSwitch";
import { getData, sendData } from "../../Config/firebaseMethods";
import CusTable from "../../utils/components/MaterialUi/cusTable";

function CreateResult() {
  const [filledForm, setFilledForm] = useState({});
  const [courseStatus, setCourseStatus] = useState(false);
  // let rollNumber = () => {
  //   resultData.map((e, i) => {
  //     const [count, setCount] = useState(001)
  //     return (
  //       `${e.name.slice(0, 3)} ${count}`,
  //       setCount(count + 1)
  //     )
  //   })
  // }
  const [resultData, setResultData] = useState([
    {
      name: "JAMAL KARIM",
      rollNum:  `JAM001` ,
      marks: 60,
      result: "Pass",
    },
    {
      name: "SALMAN KARIM",
      rollNum:  `SAM002` ,
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
  const [resultTableData, setResultTableData] = useState([]);
  const [loader, setLoader] = useState(false);

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
      <h1 style= {{textAlign: "center", marginBottom: "10%"}}>Create Result</h1>
      <Box sx={{ paddingInline: 20 }}>
        <Grid spacing={4} container>
          <Grid md={12} item>
            <CusSwitch
              value={courseStatus}
              onChange={(e) => setCourseStatus(e.target.checked)}
              label="Course"
            />
          </Grid>
          <Grid md={12} item>
            <CusSelect
              label="Course"
              onChange={(e) => setFilledForm({ ...filledForm, course: e.target.value })}
              datasource={[
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
                  fullName: "Machine Learning"
                },
                {
                  id: "en",
                  fullName: "English Language"
                }
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <CusTable/>
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
                    datasource={[
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
export default CreateResult;
