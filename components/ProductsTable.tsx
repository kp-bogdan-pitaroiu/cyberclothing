import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Breadcrumbs, TablePagination } from '@mui/material';
import { DeleteOutline, Edit } from '@mui/icons-material';
import styles from '@/styles/Orders.module.css';
import statusCircles from '@/styles/CerculeteColorate.module.css';
import Link from 'next/link';
import Cookies from 'js-cookie';

interface Products {
    id: number;
    photo: string;
    name: string;
    price: number;
    status: string;
    category: string;
    vendorId: number;
}

interface Vendor {
    id: number;
    email: string;
    password: string;
}

function decryptFunction(encryptedData: string): any {
    return CryptoJS.AES.decrypt(encryptedData, "key").toString(CryptoJS.enc.Utf8);
}

const BasicTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [data, setData] = useState<Products[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Products | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [vendorsData, setVendorsData] = useState<Vendor[]>([]);

    const handleOpen = (product: Products, key: number) => {
        setSelectedRow(product);
        setSelectedIndex(key);
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    const deleteTableRow = (id: number) => {
        const updatedData = data.filter((el) => el.id !== id);
        setData(updatedData);
    };

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {
        fetch('../../vendors.json')
            .then((response) => response.json())
            .then((vendorData) => {
                setVendorsData(vendorData);
                const encryptedData = Cookies.get('userData');
                if (encryptedData) {
                    try {
                        const decryptedData = decryptFunction(encryptedData);
                        const user = JSON.parse(decryptedData) as Vendor;
                        const loggedInVendor = vendorData.find(
                            (vendor: Vendor) => vendor.email === user.email && vendor.password === user.password
                        );
                        if (loggedInVendor) {
                            fetch('../products.json')
                                .then((response) => response.json())
                                .then((productsData) => {
                                    console.log("All Products Data:", productsData);
                                    const filteredProducts = productsData.products.filter(
                                        (product: Products) => product.vendorId === loggedInVendor.id
                                    );

                                    console.log("Filtered Products:", filteredProducts);
                                    setData(filteredProducts);
                                })
                                .catch((error) => console.error('Error fetching products:', error));
                        }
                    } catch (error) {
                        console.error('Error decrypting data:', error);
                    }
                }
            })
            .catch((error) => console.error('Error fetching vendors:', error));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <div className={styles.section}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>PRODUCTS</h2>
                    <h3>Cyberclothing Admin Panel</h3>
                </div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/frontend">
                        HOME
                    </Link>
                    <Typography color="text.primary">Products</Typography>
                </Breadcrumbs>
            </div>
            <TableContainer component={Paper} sx={{ borderRadius: '0px' }}>
                <Table className={styles.tableList} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead className={styles.head}>
                        <TableRow className={styles.element}>
                            <TableCell align="center" className={styles.tableHeader1}>
                                <b>Id</b>
                            </TableCell>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Photo</b>
                            </TableCell>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Name</b>
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
                            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: Products, index: number) => (
                                <TableRow key={row.id}>
                                    <TableCell align="center" component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center"><img src={row.photo} alt={row.name} className={styles.image} /></TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">${row.price}</TableCell>
                                    <TableCell align="center">
                                        <span className={`${statusCircles.cercul} ${statusCircles[row.status]}`}></span>
                                    </TableCell>
                                    <TableCell align="center">{row.category}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => deleteTableRow(row.id)}
                                            className={styles.delete}
                                        >
                                            <DeleteOutline />
                                        </Button>
                                        <Button
                                            onClick={() => handleOpen(row, index)}
                                            className={styles.edit}
                                        >
                                            <Edit />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        </div>
    );
};

export default BasicTable;
