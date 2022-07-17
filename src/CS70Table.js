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
      backgroundColor: theme.palette.primary.main,
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

function createData(name, notes, comments) {
    return { name, notes, comments};
}

const rows = [
    createData('Proofs', "", ""),
    createData('Graphs', "", ""),
    createData('Modular Arithmetics', "", ""),
    createData('Polynomials', "", ""),
    createData('Combinatorics', "", ""),
    createData('Computability', "", ""),
    createData('Probability I', "", ""),
    createData('Probability II', "", ""),
    createData('Markov Chain', "", ""),
    createData('Estimation', "", "")
];

export default function SJPOTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell style={{ width: '2rem' }}>Topic</StyledTableCell>
                        <StyledTableCell align="right">Notes</StyledTableCell>
                        <StyledTableCell align="right">Comments</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell component="a" href={row.notes} align="right" target="_blank">{row.notes != "" ? <a>Notes</a> : null}</StyledTableCell>
                            <StyledTableCell align="right">{row.comments}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}