"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function AppTable({ data = [] as any[] }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Application Table">
        <TableHead>
          <TableRow>
            <TableCell> Company </TableCell>
            <TableCell align="right"> Pay </TableCell>
            <TableCell align="right"> Role </TableCell>
            <TableCell align="right"> Date Applied </TableCell>
            <TableCell align="right"> Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow
              key={data.company}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.company}
              </TableCell>
              <TableCell align="right">{data.pay}</TableCell>
              <TableCell align="right">{data.role}</TableCell>
              <TableCell align="right">{data.date}</TableCell>
              <TableCell align="right">{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
