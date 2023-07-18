import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "@/styles/Table.module.css";
import TablePagination from "@mui/material/TablePagination";
import { rows } from "./tablerows";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";


const BasicTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState(rows);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteTableRaw = (index: any) => {
    setData(data.filter(el => el.key !== index))
    console.log("%c delete", "color: blue" );
  };
  return (
    <TableContainer component={Paper}>
      <Table
        className={styles.tableList}
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead className={styles.head}>
          <h2>Product Sub Category</h2>
          <TableRow className={styles.element}>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Image</b>
            </TableCell>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Product_name</b>
            </TableCell>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Price</b>
            </TableCell>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Status</b>
            </TableCell>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Category</b>
            </TableCell>
            <TableCell align="center" className={styles.tableHeader}>
              <b>Action</b>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody className={styles.body}>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={row.image} className={styles.thumb} />
                  </TableCell>
                  <TableCell align="center">{row.productName}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <span className={styles[row.status]}></span>
                  </TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => deleteTableRaw(row.key)} className={styles.cos}>
                      <DeleteOutlineIcon />
                    </Button>
                    <Button className={styles.creion}>
                      <CreateOutlinedIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>

      <TablePagination
        className={styles.pagination}
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
export default BasicTable;
