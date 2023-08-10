import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from '@/styles/Orders.module.css';

interface Order {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    price: number;
    status: string;
}

const getLabelColor = (value: string) => {
    switch (value) {
        case 'in progress':
            return 'orange';
        case 'delivered':
            return 'green';
        case 'canceled':
            return 'red';
        default:
            return 'black';
    }
};

function OrdersTable() {
    const [data, setData] = useState<Order[]>([]);
    const [openRows, setOpenRows] = useState<boolean[]>([]);

    useEffect(() => {
        fetch('../orders.json')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setOpenRows(new Array(data.length).fill(false));
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                <Table aria-label="basic-table">
                    <TableHead className={styles.head}>
                        <TableRow className={styles.element}>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Order Id</b>
                            </TableCell>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Total</b>
                            </TableCell>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Payment Method</b>
                            </TableCell>
                            <TableCell align="center" className={styles.tableHeader}>
                                <b>Status</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(-8).map((order) => (
                            <TableRow key={order.id}>
                                <TableCell align="center">#{order.id}</TableCell>
                                <TableCell align="center">${order.price}</TableCell>
                                <TableCell align="center">Mastercard</TableCell>
                                <TableCell align="center">
                                    <span style={{ color: getLabelColor(order.status), textTransform: "capitalize" }}>{order.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default OrdersTable;
