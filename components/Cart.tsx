import React, { useState } from 'react';
import Header from '@/components/Header';
import styles from '@/styles/Cart.module.css';
import Link from 'next/link';
import { Box, Button, Breadcrumbs, Tooltip, Typography, Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { Clear, Add, Remove } from '@mui/icons-material';
import { useRouter } from 'next/navigation'

export default function Cart() {
    const router = useRouter()

    const calculateSubtotal = (price: number, quantity: number) => {
        return price * quantity;
    };

    const calculateTotalPrice = () => {
        const totalPrice = rows.reduce((total, row) => {
            return total + calculateSubtotal(row.price, row.quantity);
        }, 0);
        return totalPrice;
    };

    const [rows, setRows] = useState(initialRows);

    const updateQuantity = (id: number, quantity: number) => {
        const updatedRows = rows.map((row) =>
            row.id === id ? { ...row, quantity: quantity } : row
        );
        setRows(updatedRows);
    };

    const deleteTask = (id: number) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
    };

    return (
        <>
            <Header />
            <div className={styles.section}>
                <h2>Cart Page</h2>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="./">
                        HOME
                    </Link>
                    <Typography color="text.primary">Cart Page</Typography>
                </Breadcrumbs>
            </div>
            <BasicTable
                rows={rows}
                updateQuantity={updateQuantity}
                deleteTask={deleteTask}
                calculateSubtotal={calculateSubtotal}
            />
            <div className={styles.total}>
                <h3>Total Price: ${calculateTotalPrice()}</h3>
            </div>
            <div className={styles.btns}>

                <Button size='large' variant='contained' onClick={() => {
                    router.push('/frontend')
                    setTimeout(() => {
                        const distance = (document?.querySelector("#products") as HTMLElement)?.offsetTop;

                        window.scrollTo({
                            top: distance,
                            behavior: "smooth",
                        })
                    }, 500);
                }}>CONTINUE SHOPPING</Button>

                <Button size='large' variant='contained'>CHECK OUT</Button>
            </div>
        </>
    );
}

function createData(id: number, image: string, name: string, price: number, quantity: number, action: any) {
    return { id, image, name, price, quantity, action };
}

const initialRows = [
    createData(1, 'https://react.pixelstrap.com/assets/images/fashion/product/1.jpg', 'Flare Dress', 60, 1, 'X'),
    createData(2, 'https://react.pixelstrap.com/assets/images/fashion/product/2.jpg', 'Womens Jeans', 165, 1, 'X')
];

function BasicTable({ rows, updateQuantity, deleteTask, calculateSubtotal }: any) {
    const router = useRouter();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">IMAGE</TableCell>
                        <TableCell align="center">PRODUCT NAME</TableCell>
                        <TableCell align="center">PRICE</TableCell>
                        <TableCell align="center">QUANTITY</TableCell>
                        <TableCell align="center">ACTION</TableCell>
                        <TableCell align="center">SUBTOTAL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6} align="center">
                                <h3 className={styles.h3}>No items in cart</h3>
                                <Link href='/frontend'>
                                    <Button variant='contained' size='large' onClick={() => {
                                        router.push('/frontend')
                                        setTimeout(() => {
                                            const distance = (document?.querySelector("#products") as HTMLElement)?.offsetTop;
                                            window.scrollTo({
                                                top: distance,
                                                behavior: "smooth",
                                            })
                                        }, 500);
                                    }}>SHOP OUR PRODUCTS</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((row: any) => (
                            <TableRow
                                key={row.image}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" component="th" scope="row">
                                    <img className={styles.img} src={row.image} alt={row.name} />
                                </TableCell>
                                <TableCell align="center" className={styles.ts}>{row.name}</TableCell>
                                <TableCell align="center" className={styles.ts}>${row.price}</TableCell>
                                <TableCell align="center">
                                    <Increment
                                        quantity={row.quantity}
                                        updateQuantity={(newQuantity: any) =>
                                            updateQuantity(row.id, newQuantity)
                                        }
                                    />
                                </TableCell>
                                <TableCell align="center">
                                    <Button style={{ backgroundColor: 'transparent' }} className={styles.clearbtn} onClick={() => deleteTask(row.id)}>
                                        <Clear />
                                    </Button>
                                </TableCell>
                                <TableCell align="center" className={styles.ts}>
                                    ${calculateSubtotal(row.price, row.quantity)}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Increment = ({ quantity, updateQuantity }: any) => {
    const [count, setCount] = useState(quantity);

    const IncNum = () => {
        setCount(count + 1);
        updateQuantity(count + 1);
    };

    const DecNum = () => {
        if (count > 1) {
            setCount(count - 1);
            updateQuantity(count - 1);
        } else {
            setCount(1);
            updateQuantity(1);
        }
    };

    return (
        <>
            <div className={styles.btndiv}>
                <Box component='span' sx={{ bgcolor: 'white', border: '1px solid #777', borderRadius: '2px' }}>
                    <div className={styles.btndiv}>
                        <Tooltip title="Delete Item">
                            <Button style={{ backgroundColor: 'transparent' }} onClick={DecNum}>
                                <Remove />
                            </Button>
                        </Tooltip>
                        <div className={styles.increment}>{count}</div>
                        <Tooltip title="Add Item">
                            <Button style={{ backgroundColor: 'transparent' }} onClick={IncNum}>
                                <Add />
                            </Button>
                        </Tooltip>
                    </div>
                </Box>
            </div>
        </>
    );
};