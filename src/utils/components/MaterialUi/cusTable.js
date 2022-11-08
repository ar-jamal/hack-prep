import * as React from 'react';
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

function createData(name, rollNumber, marks, percent, result) {
    return { name, rollNumber, marks, percent, result };
}

const rows = [
    createData('JAMAL KARIM', "JAM001", 60, "60%", "Pass"),
    createData('SALMAN KARIM', "SAM002", 65, "65%", "Pass"),
    createData('SIKANDER KARIM', "SIK003", 75, "75%", "Pass"),
    createData('QAISER KARIM', "QAIS004", 85, "85%", "Pass"),
    createData('SHEHROZ KARIM', "SHE005", 75, "75%", "Pass"),
    createData('FAISAL KARIM', "FAIS006", 55, "55%", "Pass"),
    createData('BABAR ALI', "BAB001", 45, "45%", "Pass"),
    createData('ASIF ALI', "ASI001", 80, "80%", "Pass"),

];

export default function CusTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Student Name</StyledTableCell>
                        <StyledTableCell align="right">Roll&nbsp;Number</StyledTableCell>
                        <StyledTableCell align="right">Marks</StyledTableCell>
                        <StyledTableCell align="right">Percentage</StyledTableCell>
                        <StyledTableCell align="right">Result</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.rollNumber}</StyledTableCell>
                            <StyledTableCell align="right">{row.marks}</StyledTableCell>
                            <StyledTableCell align="right">{row.percent}</StyledTableCell>
                            <StyledTableCell align="right">{row.result}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
