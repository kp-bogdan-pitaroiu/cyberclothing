import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '@/styles/Table.module.css'


function createData(
  Image: string,
  Product_Name: string,
  Price: number,
  Status: string,
  Category: string,
  Action: string,
) {
  return { Image, Product_Name, Price, Status, Category, Action };
}

const rows = [
  createData('Steering Wheels', 159, '', 'Electronics', 'd/r'),
  createData('Motor Vehicle Tyres', 237, '', 'Electronics', 'd/r'),
  createData('Automotive Battery', 262, '', 'Electronics', 'd/r'),
  createData('Apple 6s', 305, '', 'Electronics', 'd/r'),
  createData('Printer', 356, '', 'Electronics', 'd/r'),
];

export default function BasicTable() {
  return (
    <TableContainer component = {Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className = { styles.head}>

          <TableRow className = {styles.element}>

            <TableCell align="center" className={styles.tableHeader}><b>Image</b></TableCell>
            <TableCell align="center" className={styles.tableHeader}><b>Product_name</b></TableCell>
            <TableCell align="center" className={styles.tableHeader}><b>Price</b></TableCell>
            <TableCell align="center" className={styles.tableHeader}><b>Status</b></TableCell>
            <TableCell align="center" className={styles.tableHeader}><b>Category</b></TableCell>
            <TableCell align="center" className={styles.tableHeader}><b>Action</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className = {styles.body}>

          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.Image}</TableCell>
              <TableCell align="center">{row.Product_Name}</TableCell>
              <TableCell align="center">{row.Price}</TableCell>
              <TableCell align="center" className={row.Status}></TableCell>
                 <i class="fa fa-circle font-danger f-12">
                    ::before == $0
                 </i>

              <TableCell align="center">{row.Category}</TableCell>
              <TableCell align="center">{row.Action}</TableCell>    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}