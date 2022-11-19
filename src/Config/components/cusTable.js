import StudentForm from "../../Screens/studentForm";

function SMGrid(props) {
  // const { datasource, Cols } = props;

  console.log(datasource, Cols);

  const Cols = [
    { studentName: 'JAMAL KARIM', rollNumber: "JAM001", marks: 60, percentage: "60%", status: "Pass" },
    { studentName: 'SALMAN KARIM', rollNumber: "SAM002", marks: 65, percentage: "65%", status: "Pass" },
    { studentName: 'SIKANDER KARIM', rollNumber: "SIK003", marks: 75, percentage: "75%", status: "Pass" },
    { studentName: 'QAISER KARIM', rollNumber: "QAIS004", marks: 85, percentage: "85%", status: "Pass" },
    { studentName: 'SHEHROZ KARIM', rollNumber: "SHE005", marks: 75, percentage: "75%", status: "Pass" },
    { studentName: 'FAISAL KARIM', rollNumber: "FAIS006", marks: 55, percentage: "55%", status: "Pass" },
    { studentName: 'BABAR ALI', rollNumber: "BAB001", marks: 45, percentage: "45%", status: "Pass" },
    { studentName: 'ASIF ALI', rollNumber: "ASI001", marks: 80, percentage: "80%", status: "Pass" }
  ]
  console.log (Object.keys(Cols[0]).length)

  return (
    <>
      {Cols && Array.isArray(Cols) && (
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>s#</th>
              {Cols.map((y, i) => (
                <th key={i}>{y.displayName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datasource &&
              Array.isArray(datasource) &&
              datasource.length > 0 ? (
              datasource.map((x, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {Cols.map((y, ind) => (
                    <td key={ind}>{x[y.key]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <h1>No Data Found</h1>
            )}
          </tbody>
        </table>
      )}
    </>
  );
}
export default SMGrid;
