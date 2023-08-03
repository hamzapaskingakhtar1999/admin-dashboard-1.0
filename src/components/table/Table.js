import React from "react";
import "./Table.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const rows = [
    {
      id: 1134,
      product: "HP Pavillion 16 Gaming Laptop",
      img: "Jon",
      customer: "John Smith",
      date: "2 March 2023",
      amount: 550,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2134,
      product: "Iphone 13 Pro Max",
      img: "Jon",
      customer: "Jackson Reed",
      date: "24 March 2023",
      amount: 1200,
      method: "Online",
      status: "Approved",
    },
    {
      id: 3124,
      product: "Samsung Galaxy S21",
      img: "Jon",
      customer: "Bridget Regan",
      date: "9 April 2023",
      amount: 950,
      method: "Online",
      status: "Approved",
    },
    {
      id: 3194,
      product: "USB Type C Fast Charger",
      img: "Jon",
      customer: "Gerald Hunter",
      date: "12 April 2023",
      amount: 20,
      method: "Online",
      status: "Approved",
    },
    {
      id: 4102,
      product: "iPad",
      img: "Hamza",
      customer: "Hamza Akhtar",
      date: "17 April 2023",
      amount: 500,
      method: "Online",
      status: "Approved",
    },
    {
      id: 4513,
      product: "Wireless Earbuds M41",
      img: "Jon",
      customer: "John Doe",
      date: "21 May 2023",
      amount: 40,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <div className="table">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.id}</TableCell>
                <TableCell className="tableCell">{row.product}</TableCell>
                <TableCell className="tableCell">{row.customer}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">{row.amount}</TableCell>
                <TableCell className="tableCell">{row.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableList;
