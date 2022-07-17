import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, a, b, c, d, e, f, g) {
    return { name, a, b, c, d, e, f, g};
}

const rows = [
    createData('5km', null, "21:49", "29:16", "23:36", null, null, null),
    createData('10km', "48:14", "50:16", "55:01", null, null, null, null),
    createData('21.1km (Half-Marathon)', "2:09:35", null, null, null, null, null, null),
    createData('42.2km (Marathon)', "4:39:17", null, null, null, null, null, null),
];

export default function RunningTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Distance</TableCell>
                        <TableCell align="right">2019</TableCell>
                        <TableCell align="right">2020</TableCell>
                        <TableCell align="right">2021</TableCell>
                        <TableCell align="right">2022</TableCell>
                        <TableCell align="right">2023</TableCell>
                        <TableCell align="right">2024</TableCell>
                        <TableCell align="right">2025</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.a}</TableCell>
                            <TableCell align="right">{row.b}</TableCell>
                            <TableCell align="right">{row.c}</TableCell>
                            <TableCell align="right">{row.d}</TableCell>
                            <TableCell align="right">{row.e}</TableCell>
                            <TableCell align="right">{row.f}</TableCell>
                            <TableCell align="right">{row.g}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}