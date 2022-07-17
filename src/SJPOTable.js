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

function createData(name, notes, solutions) {
    return { name, notes, solutions};
}

const rows = [
    createData('Mechanics I', "https://github.com/jianzhi-1/physics-notes/blob/master/1.%20Mechanics%20I.pdf", ""),
    createData('Mechanics II', "https://github.com/jianzhi-1/physics-notes/blob/master/2.%20Mechanics%20II.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/2.%20Mechanics%20II%20(Solutions).pdf"),
    createData('Mechanics III', "https://github.com/jianzhi-1/physics-notes/blob/master/3.%20Mechanics%20III.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/3.%20Mechanics%20III%20(Solutions).pdf"),
    createData('Waves', "https://github.com/jianzhi-1/physics-notes/blob/master/4.%20Waves.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/4.%20Waves%20(Solutions).pdf"),
    createData('Electricity and Magnetism I', "https://github.com/jianzhi-1/physics-notes/blob/master/5.%20Electricity%20and%20Magnetism%20I.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/5.%20Electricity%20and%20Magnetism%20I%20(Solutions).pdf"),
    createData('Electricity and Magnetism II', "https://github.com/jianzhi-1/physics-notes/blob/master/6.%20Electricity%20and%20Magnetism%20II.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/6.%20Electricity%20and%20Magnetism%20II%20(Solutions).pdf"),
    createData('Fluid Mechanics', "https://github.com/jianzhi-1/physics-notes/blob/master/7.%20Fluid%20Mechanics.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/7.%20Fluid%20Mechanics%20(Solutions).pdf"),
    createData('Thermodynamics', "https://github.com/jianzhi-1/physics-notes/blob/master/8.%20Thermodynamics.pdf", "https://github.com/jianzhi-1/physics-notes/blob/master/8.%20Thermodynamics%20(Solutions).pdf"),
    createData('Special Relativity', "https://github.com/jianzhi-1/physics-notes/blob/master/9.%20Special%20Relativity.pdf", ""),
    createData('Quantum Mechanics', "https://github.com/jianzhi-1/physics-notes/blob/master/10.%20Quantum%20Mechanics.pdf", "")
];

export default function SJPOTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell style={{ width: '2rem' }}>Topic</StyledTableCell>
                        <StyledTableCell align="right">Notes</StyledTableCell>
                        <StyledTableCell align="right">Solutions</StyledTableCell>
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
                            <StyledTableCell component="a" href={row.notes} align="right" target="_blank"><a>Notes</a></StyledTableCell>
                            <StyledTableCell component="a" href={row.solutions} align="right" target="_blank">{row.solutions != "" ? <a>Solutions</a> : null}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}