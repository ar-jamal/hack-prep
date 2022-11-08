import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import CusSelect from "../../utils/components/MaterialUi/cusSelect";
import CusAlert from "../../utils/components/MaterialUi/cusAlert";
import CusSwitch from "../../utils/components/MaterialUi/cusSwitch";
import { getData, sendData } from "../../Config/firebaseMethods";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
      marks: 60,
      rollNum:  `JAM001` ,
      result: "Pass",
    },
    {
      name: "SALMAN KARIM",
      marks: 65,
      rollNum:  `SAM002` ,
      result: "Pass",
    },
    {
      name: "SIKANDER KARIM",
      marks: 75,
      rollNum: "SIK003",
      result: "Pass",
    },
    {
      name: "QAISAR KARIM",
      marks: 85,
      rollNum: "QAIS004",
      result: "Pass",
    },
    {
      name: "SHEHROZ KARIM",
      marks: 60,
      rollNum: "SHE005",
      result: "Pass",
    },
    {
      name: "FAISAL KARIM",
      marks: 55,
      rollNum: "FAIS006",
      result: "Pass",
    },
    {
      name: "BABAR ALI",
      marks: 45,
      rollNum: "BAB007",
      result: "Pass",
    },
    {
      name: "ASIF ALI",
      marks: 80,
      rollNum: "ASF008",
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
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
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
